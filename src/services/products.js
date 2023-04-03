import axios from 'axios'

const PRODUCTS_URL = "https://whispering-river-87788.herokuapp.com/api/products"

const getProducts = () => {
    return axios.get(PRODUCTS_URL)
}

export default { getProducts }