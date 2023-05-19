import React from "react";
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from 'yup';
import authService from "../../services/auth"
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";

const registerSchema = yup.object({
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must have minimum 8 characters")
      .max(30, "Password must have maximum 30 characters")
      .required("Password is required"),
    username: yup
      .string()
      .required("Username is required")
})

const RegisterForm = ({ styles }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: ''
    },
    onSubmit: async (values, {resetForm}) => {
      try {
        const response = await authService.register(values)
        dispatch(loginSuccess(response.data))
      } catch (error) {
        console.log(error)
      }
      resetForm()
    },
    validationSchema: registerSchema
  })
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.control}>
        <TextField 
          error={formik.touched.email && Boolean(formik.errors.email)} // есть ошибка или нет
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          label="Email" 
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className={styles.control}>
        <TextField 
          error={formik.touched.username && Boolean(formik.errors.username)} // есть ошибка или нет
          helperText={formik.touched.username && formik.errors.username}
          onBlur={formik.handleBlur}
          label="Username" 
          variant="outlined"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>
      <div className={styles.control}>
        <TextField 
          error={formik.touched.password && Boolean(formik.errors.password)} // есть ошибка или нет
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          label="Password" 
          variant="outlined" 
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
        />
      </div>
      <input type="submit" value="Register" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;

/*
  Отобразить в toast уведомление при успешной регистрации пользователя/при ошибке

  values: {
    email: 'Hello',
    password: '12345678'
  }

  touched: {
    email: ,
    password: 
  }

  array.map().filter()

  values: {
    email: 'Hello',
    password: '1234567'
  }

  errors: {
    email: "Enter valid email",
    password: "Password must have minimum 8 characters"
  }
*/
