import axios from 'axios';

export const registerUser=(user) =>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})
try{
    const response = await axios.post('https://lavazzamockup-api1.onrender.com/api/users/register',user, {
            withCredentials: true // Ensure credentials are included if necessary
        })
    console.log(response);
    dispatch({type:'USER_REGISTER_SUCCESS'});
      

}catch(error){
    dispatch({type:'USER_REGISTER_FAILED',payload:error})

}
}

export const loginUser=(user) =>async dispatch=>{

    dispatch({type:'USER_LOGIN_REQUEST'})
try{
    const response = await axios.post('https://lavazzamockup-api1.onrender.com/api/users/login',user, {
            withCredentials: true // Ensure credentials are included if necessary
        })
    console.log(response);
      
    dispatch({type:'USER_LOGIN_SUCCESS', payload: response.data})
    localStorage.setItem('currentUser', JSON.stringify(response.data))
    window.location.href='/'
}catch(error){
    dispatch({type:'USER_LOGIN_FAILED',payload:error})
}
}
export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')
    window.location.href='/login'
}
