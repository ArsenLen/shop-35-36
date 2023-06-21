import React from 'react';
import styles from './cartproduct.module.css';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';

const CartProduct = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.wrapper}>
            <img src={product.img} alt="" className={styles.img} />
            <p className={styles.name}>{product.title}</p>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.quantity}>{product.quantity}</p>
            <p className={styles.subtotal}>{product.quantity * product.price}</p>
            <button onClick={e => dispatch(deleteFromCart(product._id))}>
                <img src="images/delete-icon.png" alt="" />
            </button>
        </div>
    );
};

export default CartProduct;