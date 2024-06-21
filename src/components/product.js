import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { toast } from 'react-toastify';

export default function Product({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(product, quantity, varient,isChecked));
    toast.success('Product added to cart!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false
    });
  }

  const calculatedPrice = isChecked ? 0 : product.prices[0][varient] * quantity;

  return (
<div style={{ margin: '5px', backgroundColor: '#f3f3f3', border: '0px solid #ddd', borderRadius: '8px' }} className='mb-2 mt-4'>    <div onClick={handleShow}>
      <h1 style={{ backgroundColor: '#f0f0f0' }}  className='pt-3'>{product.name}</h1>
      <img src={product.image} alt='product' className='img-fluid' style={{ height: '200px', width: '250px' }} />
    </div>
    <div className='flex-container'>
      {product.category === 'caf' ? (
        <div className='w-100 m-1'>
          <p>Type</p>
          <label>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='mx-3'
            />
            Pret?
          </label>
        </div>
      ) : (
        <div className='w-100 m-1'>
          <p>Varients</p>
          <select className='form-select' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
            {product.varients.map(varient => (
              <option key={varient} value={varient}>{varient}</option>
            ))}
          </select>
        </div>
      )}
      <div className='w-100 m-1'>
        <p>Quantity</p>
        <select className='form-select' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
          {[...Array(10).keys()].map((x, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
    </div>

    <div className='flex-container pb-3'>
      <div className='m-1 w-100'>
        <h1 className='mt-2 bold-text' >Price : {calculatedPrice} DH</h1>
      </div>

      <div className='m-1 w-100'>
        <button className='btn' onClick={addtocart}>ADD TO CART</button>
      </div>
    </div>

    <Modal show={show}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src={product.image} alt='product' className='img-fluid' style={{ height: '400px' }} />
        <p>{product.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className='btn' onClick={handleClose}>CLOSE</button>
      </Modal.Footer>
    </Modal>
  </div>)
}
