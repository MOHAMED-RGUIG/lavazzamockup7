import axios from "axios";

export const getAllProducts = () => async dispatch => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' })

    try {
        const response = await axios.get('https://lavazzamockup-api1.onrender.com/api/products/getallproducts');
        console.log(response);
        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_PRODUCTS_FAILED', payload: error });
    }
};
