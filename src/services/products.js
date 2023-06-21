import axios from 'axios'

const PRODUCTS_URL = "https://whispering-river-87788.herokuapp.com/api/products"
const PRODUCT_URL = "https://whispering-river-87788.herokuapp.com/api/product/"


const getProducts = () => {
    return axios.get(PRODUCTS_URL)
}

const getProduct = (id) => {
    return axios.get(PRODUCT_URL + id)
}

export default { getProducts, getProduct }