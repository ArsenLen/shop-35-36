import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsCart: [],
        quantity: 0, // количество уникальных товаров в корзине
        isOpen: false,
        sum: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.isOpen = true // открываем модальное окно
            state.sum += action.payload.price * action.payload.quantity // подсчет суммы
            const productIndex = state.productsCart.findIndex(product => product._id === action.payload._id) // 1
            if(productIndex === -1) {
                // если такого продукта в корзине нет
                state.productsCart.push(action.payload) // добавляем объекты продуктов в корзину
                state.quantity++ // увеличиваем количество уникальных товаров в корзине
            } else {
                // если такой товар в корзине уже есть
                state.productsCart[productIndex].quantity += action.payload.quantity 
            }
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        deleteFromCart: (state, action) => {
            const currentIndex = state.productsCart.findIndex(product => product._id === action.payload)
            state.sum -= state.productsCart[currentIndex].price * state.productsCart[currentIndex].quantity
            state.productsCart.splice(currentIndex, 1)
            state.quantity--
        }
    }
})

export default cartSlice.reducer
export const { addToCart, closeModal, deleteFromCart } = cartSlice.actions

/*
    При добавлении одного и того же товара в корзину, происходит не увеление количества товара,
    а добавление еще одного объекта с товаром
*/