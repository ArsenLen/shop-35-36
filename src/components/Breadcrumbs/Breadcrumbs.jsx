import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css'

const Breadcrumbs = (props) => {
    const {pathname} = useLocation()
    return (
        <div className={styles.wrapper}>
            <img src="/images/breadcrumb-logo.png" alt="" className={styles.icon} />
            <h1>{props.title}</h1>
            <div className={styles.breadcrumb}>
              <Link to="/">Home</Link> &#8594; <Link to={pathname}>{props.title}</Link> 
            </div>
        </div>
    );
};

export default Breadcrumbs;

// mysite.com/shop/catalog/214 ->  ["/shop", "shop/catalog", "/214"]