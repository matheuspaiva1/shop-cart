import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './carButton.css'
import AppContext from '../../context/appContext';

export default function CarButton(){
  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext)

  return(
    <button type="button" className="cart__button"
    onClick={()=> setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart/>
      
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  )
}