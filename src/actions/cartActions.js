export const addToCart = (product, quantity, varient, isChecked) => (dispatch ,getState)=>{
var cartItem = {
    name : product.name,
    _id : product._id,
    image : product.image,
    varient : varient,
    quantity : Number(quantity),
    prices : product.prices,
    price: isChecked ? 0 : product.prices[0][varient] * quantity,
    isChecked: isChecked}

if(cartItem.quantity>10){
    alert("You cannot add more than 10 quantities ")
}else{
    if(cartItem.quantity<1){
        alert("You cannot choose less than 1 quantity ")
    }else{
        dispatch({type: 'ADD_TO_CART', payload: cartItem})

    }
}

const cartItems = getState().cartReducer.cartItems
localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart=(product)=>(dispatch,getState)=>{
        dispatch({type:'DELETE_FROM_CART',payload:product})
        const cartItems = getState().cartReducer.cartItems

        localStorage.setItem('cartItems', JSON.stringify(cartItems))
 
}


/*import axios from 'axios';

export const placeCart = (product, quantity, varient) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_CART_REQUEST' });
    const currentUser = getState().loginUserReducer.currentUser;

    try {
        const response = await axios.post('/api/carts/placecart', { currentUser, product, quantity, varient });
        console.log(response);
        dispatch({ type: 'PLACE_CART_SUCCESS' });
    } catch (error) {
        // Extract relevant error information and dispatch a simpler error message
        const errorMessage = error.response?.data?.message || 'Something went wrong';
        dispatch({ type: 'PLACE_CART_FAILED', payload: errorMessage });
    }
};*/