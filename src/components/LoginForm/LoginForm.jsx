import React, { useState } from "react";
import authService from "../../services/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";


const LoginForm = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };
    try {
      const response = await toast.promise(
        authService.login(userInfo),
        {
            pending: 'Promise is pending',
            success: 'Вы успешно авторизованы 👌',
        }
      ) 
      dispatch(loginSuccess(response.data))
      setEmail('')
      setPassword('')
      setTimeout(() => {
        navigate("/catalog")
      }, 1000)
    } catch (error) {
      toast(error.response.data)
    }
  };
  return (
    <form className={styles.form} onSubmit={login}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.control}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          placeholder="pass"
          name="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.controlCheckbox}>
        <input type="checkbox" name="checkbox" className={styles.checkbox} />
        <label htmlFor="checkbox" className={styles.labelCheckbox}>
          Remember me
        </label>
      </div>
      <input type="submit" value="Log In" className={styles.submit} />
    </form>
  );
};

export default LoginForm;

/*
    Добавить useFormik, yup и MUI. 
*/
