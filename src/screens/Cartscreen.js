import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'
//import { placeOrder } from '../actions/orderActions'
//import { Link } from 'react-router-dom';
function Cartscreen() {
  const cartstate= useSelector(state=>state.cartReducer)
  const cartItems= cartstate.cartItems
  var subtotal = cartItems.reduce((x,item)=>x+item.price,0) ;
   const [codeClient,setcodeClient] = useState('')
    const [raisonSocial,setraisonSocial] = useState('')
    const [adresse,setadresse] = useState('')
     const [tel,settel] = useState('') 
  const [emailClt,setemailClt] = useState('')
  const [comment, setComment] = useState('');
  
 
  //const orderstate = useSelector(state=>state.placeOrderReducer)

  const dispatch = useDispatch()



  return (
    <div className='container col-xl-12 col-md-12 col-12'>
        
       <div className='justify-content-center col-12 col-md-12'>
          <div className='col-md-12 col-12'>
              <h2 style={{fontSize:'35px'}} className='mx-auto col-md-12 col-12 mt-3'>My Cart</h2>
              <h2 style={{fontSize:'18px'}}>Total price : {subtotal}   DH</h2>
              <hr/>
              {cartItems.map(item=>{
                return <div className='flex-container col-12 col-md-12 mx-auto mb-2 '>
                   <hr/>
                <div className='mx-2 ' >
                    <img src={item.image} alt='item' style={{height:'120px',width:'140px',backgroundColor:'#f3f3f3',borderRadius:'3px'}} />
              </div>  
              <div className='text-start  w-50 pt-1'> 
                    <h3 style={{display:'inline',fontSize:'13px'}}>{item.name}[{item.varient}]</h3><br></br>
                   
             <h2 style={{display:'inline',fontSize:'16px'}}> {item.price} DH</h2><br></br>
                    <i className="fa-solid fa-minus"  style={{fontSize:'15px'}} aria-hidden='true'onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient,item.isChecked))}}></i>

                    <b style={{fontSize:'15px',padding:'5px 0px'}} className="px-2"  >{item.quantity}</b>
                    <i className="fa-solid fa-plus"  style={{fontSize:'15px'}} aria-hidden='true' onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient,item.isChecked))}}></i>


              </div>
              
              <div className=''>
              <i className="fa fa-trash mt-5 pt-4" style={{fontSize:'15px'}} aria-hidden='true' onClick={()=>{dispatch(deleteFromCart(item))}}></i>
              
              </div>
              <hr/>
            </div>        
   
              }
                
                
                )}
              
          </div>
         
       </div>
       <div className='col-md-12 text-center col-12 mx-auto bg-white'>
       <hr/>
          <h2 style={{fontSize:'25px'}}>Client info </h2>
          <div className="text-start w-100 col-xl-12">
  
  
  <input required type='text' placeholder='Code Client' className='form-control'
                     value={codeClient} onChange={(e)=>{setcodeClient(e.target.value)}}
                    />
  <input required type='text' placeholder='Raison Social' className='form-control'
                     value={raisonSocial} onChange={(e)=>{setraisonSocial(e.target.value)}}
                    />
  <input required type='text' placeholder='Adresse' className='form-control'
                     value={adresse} onChange={(e)=>{setadresse(e.target.value)}}
                    />
  <input required type='text' placeholder='Tel' className='form-control'
                     value={tel} onChange={(e)=>{settel(e.target.value)}}
                    />
 <input required type='email' placeholder='emailClt' className='form-control mb-2'
                     value={emailClt} onChange={(e)=>{setemailClt(e.target.value)}}
                    />
  <textarea placeholder='Commentaire'  className="form-control" value={comment} onChange={(e) => { setComment(e.target.value) }} id="exampleFormControlTextarea1" rows="3"></textarea>
                  

 

  </div>
         
   


    </div>
    <div className='col-md-12 text-center col-12'>
          
             

               
          <Checkout subtotal={subtotal} codeClient ={codeClient} raisonSocial={raisonSocial} adresse={adresse}  tel={tel} emailClt={emailClt}comment={comment}/>
       
 
           </div>
        </div>
  )
}



export default Cartscreen

