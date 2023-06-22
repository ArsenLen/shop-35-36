import React, {useState} from 'react';
import styles from './checkout.module.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import axios from 'axios';

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState("")
    const cart = useSelector(state => state.cart)
    const stripe = useStripe() // метод подтверждения оплаты
    const elements = useElements() // метод сбора информации о карте пользователя, которую ввели в интерфейсе 

    useEffect(() => {
      axios.post("https://whispering-river-87788.herokuapp.com/api/create-payment-intent", {
        total: cart.sum // сумма покупки
      })
      .then(res => setClientSecret(res.data.clientSecret))
    }, [])

    const pay = (e) => {
      e.preventDefault()
      stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) // получаем данные из компонента CardElement с помощьью getelement
        }
      })
      .then(res => console.log(res))
    }

    return (
      <>
      <Breadcrumbs />
      <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={pay}>
        <div>
          <CardElement />
        </div>
        <button type="submit">Pay</button>
      </form>
      <div className={styles["product-wrapper"]}>
        <p className={styles["product-title"]}> Product  <span>Subtotal</span> </p>
        {cart.productsCart.map(product => {
          return <p className={styles["product-name"]}>  
            {product.title} X {product.quantity}  <span>{product.price * product.quantity}</span> 
          </p>
        })}
        <p className={styles["product-subtotal"]}> Subtotal  <span> {cart.sum}</span> </p>
        <p className={styles["product-total"]}> Total  <span>{cart.sum}</span> </p>
      </div>
      </div>
      </>
    );
};

export default CheckoutForm;