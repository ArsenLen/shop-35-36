import React from "react";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, deleteFromCart } from "../../redux/cartSlice";

const Modal = () => {
  const isOpen = useSelector(state => state.cart.isOpen) // состояние модального окна из редакс стейт
  const dispatch = useDispatch()
  const productsCart = useSelector(state => state.cart.productsCart) // массив продуктов корзины
  const sum = useSelector(state => state.cart.sum) // сумма всех добавленных в корзину товаров
  return (
    isOpen && productsCart.length > 0 && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img
            src="/images/basket-close-icon.png"
            alt=""
            className={styles.close}
            onClick={(e) => dispatch(closeModal())}
          />
          <h2 className={styles.title}>Shopping Cart</h2>
          <div className={styles.line}></div>
          <div className={styles.products}>
            {productsCart.map((product) => {
              return (
                <div className={styles.product} key={product._id}>
                  <img src={product.img} alt="" className={styles.img} />
                  <div className={styles.info}>
                    <h5 className={styles.name}>{product.title}</h5>
                    <p>{product.quantity} x {product.price}</p>
                  </div>
                  <button onClick={e => dispatch(deleteFromCart(product._id))}>
                    <img src="/images/close-icon.png" alt="" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className={styles.bottom}>
            <div className={styles.total}>
              <p className={styles.subtotal}>Subtotal</p> { sum }
            </div>
            <div className={styles.line}></div>
            <a href="/cart" className={styles.link}>
              View Cart
            </a>
            <a href="/checkout" className={styles.link}>
              Checkout
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

/*
  изменение количества товара после того, как добавили в корзину
*/
