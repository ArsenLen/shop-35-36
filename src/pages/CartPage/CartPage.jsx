import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CartProduct from '../../components/CartProduct/CartProduct';
import styles from './cartpage.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//4242 4242 4242 4242

const CartPage = () => {
    const productsCart = useSelector(state => state.cart.productsCart)
    const sum = useSelector(state => state.cart.sum)
    return (
      <>
        <Breadcrumbs title="Cart" />
        <section className={styles.cart}>
          <div className={styles.wrapper}>
            <div className={styles.products}>
              <div className={styles.header}>
                <p className={styles.name}></p>
                <p className={styles.name}>Product</p>
                <p className={styles.name}>Price</p>
                <p className={styles.name}>Quantity</p>
                <p className={styles.name}>Subtotal</p>
                <p className={styles.name}></p>
              </div>
              {
                productsCart.map(product => {
                  return  <CartProduct 
                       product={product}          
                  />
                })
              }
            </div>
            <div className={styles.totals}>
              <h3 className={styles.title}>Cart totals</h3>
              <p className={styles.subtotal}>
                Subtotal <span>{sum}</span>
              </p>
              <p className={styles.total}>
                Total <span>{sum}</span>
              </p>
              <Link to="/checkout" className={styles.checkout}>Check Out</Link>
            </div>
          </div>
        </section>
      </>
    );
};

export default CartPage;