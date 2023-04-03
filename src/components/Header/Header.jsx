import React from 'react';
import styles from './header.module.css'
import Modal from '../Modal/Modal';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header>
            <div className={styles.wrapper}>
                <nav className={styles.nav}>
                    <NavLink to="/" className={styles.link}>Home</NavLink>
                    <NavLink to="/catalog" className={styles.link}>Shop</NavLink>
                    <a href="/" className={styles.link}>About</a>
                    <a href="/" className={styles.link}>Contact</a>
                </nav>
                <div className={styles.icons}>
                    <a href="/" className={styles.icon}>
                        <img src="/images/profile-icon.png" alt="" className={styles.icon} />
                    </a>
                    <p className={styles.icon}>
                        <img src="/images/search-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        <img src="/images/favorite-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        <span className={styles.quantity}>1</span>
                        <img src="/images/basket-icon.png " alt="" className={styles.icon} />
                    </p>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;