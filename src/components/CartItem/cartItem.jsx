import './cartItem.css'
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/appContext';
//import formatCurrency from '../../utils/formatCurrency';

export default function CartItem({data}){

  CartItem.propTypes = {
    data: propTypes.object,
  }.isRequired;

  const {cartItems, setCartItems} = useContext(AppContext)

  const {id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updateItems)
  }
  return(
    <section className="cart-item">
      <img src={thumbnail} alt="produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button type="button" className='button__remove-item' onClick={handleRemoveItem}><BsCartDashFill/></button>
      </div>

    </section>
  )
}