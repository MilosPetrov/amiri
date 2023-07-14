import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';

export default function DrawerFooter(props) {

    const {  checkout } = useContext(ShopContext);    
    const navigate = useNavigate()
    const handleCheckout = () => {
        checkout()
        navigate("/checkout")
    }
  return (
    <div className="checkout">
        <div className="checkout-info">
            <p>Subtotal</p>
            <p>{props.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })} RSD</p>
        </div>
        <div className='checkout-button'>
            <button
                onClick={handleCheckout}
                > 
                Checkout
            </button>
        </div> 
    </div>
  )
}
