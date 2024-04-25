import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './carButton.css'

export default function CarButton(){
  return(
    <button type="button" className="cart__button">
      <AiOutlineShoppingCart/>
      <span className="cart-status">1</span>
    </button>
  )
}