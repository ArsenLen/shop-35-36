import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css'

const Product = (props) => {
    return (
        <div className={props.gridView ? styles.card : styles["card-list"]}>
            <img src={props.img} alt="" className={styles.img} />
            <div className={styles.info}>
                <Link to={`/catalog/${props.id}`} className={styles.name}>
                    {props.title}
                </Link>
                <h4 className={styles.price}>
                    {props.price}
                </h4>
                <p>{new Date(props.date).toString()}</p>
            </div>
        </div>
    );
};

export default Product;

// /catalog/34567323424idafert
// axios.get('/product/id')

/*
    <Link params={{name: "1"}} />
    {
        pathname: "",
        state: {
            params : {
                name: "1"
            }
        }
    }

    className={`view-${myView}`}
*/