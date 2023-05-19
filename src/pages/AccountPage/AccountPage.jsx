import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from "./accountpage.module.css";
import { useSelector } from 'react-redux';

const AccountPage = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    return (
      <div>
        <Breadcrumbs />
        {currentUser ? (
          <div>{currentUser.username}</div>
        ) : (
          <div className={styles.wrapper}>
            <LoginForm styles={styles} />
            <RegisterForm styles={styles} />
          </div>
        )}
      </div>
    );
};

export default AccountPage;