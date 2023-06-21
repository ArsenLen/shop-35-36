import React, {useState} from 'react';
import styles from './singleproductcard.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const SingleProductCard = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={product.img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>{product.price}</p>
                    <p className={styles.descr}>{product.descr}</p>
                    <div className={styles["control-wrapper"]}>
                        <div className={styles.quantity}>
                            <button 
                                className={styles["quantity-control"]}
                                onClick={e => quantity > 1 && setQuantity(quantity - 1)}
                            >
                                -
                            </button> 
                                <span>{quantity}</span>
                            <button 
                                className={styles["quantity-control"]} 
                                onClick={e => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button className={styles.add} onClick={e => dispatch(addToCart({...product, quantity}))}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;