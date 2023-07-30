import React, { useEffect } from 'react';
import { ShopContext } from '../../context/shop-context';
import { products } from "../../data";
import { useContext } from 'react';
import DrawerNavbar from './Drawer-navbar';
import { CartItem } from './cart-item';
import './drawer.css';
import './cart.css'
import DrawerFooter from './Drawer-footer';
import { useNavigate } from 'react-router-dom';


const Drawer = ({ isOpen, isClosed }) => {
  const drawerClassName = `drawer ${isOpen ? 'open' : ''}`;

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate()

  const handleContinueShopping = () => {
    isClosed();
    navigate('/');
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  const cartElements = Object.keys(cartItems).map((key) => {
    const [itemId, pickedSize] = key.split('-');
    const product = products.find((p) => p.id === Number(itemId));
    const quantity = cartItems[key].quantity;
    return quantity > 0 ? <CartItem key={key} product={product} selectedSize={pickedSize} /> : null;
  });

  const totalAmount = getTotalCartAmount()

  return (
    <div>
      <div className={drawerClassName} style={isOpen ? { overflowY: 'auto'} : { overflow: 'hidden'}}>
        {isOpen && <DrawerNavbar isClosed={isClosed}/>}
        <div className="drawer-content">
          <div className="cart">
            {cartElements}
          </div>
          <div className='drawer-checkout'>
            {totalAmount > 0 ? (
              <DrawerFooter totalAmount={totalAmount} />
            ) : (
              <div className='empty-drawer'>
                <h1>Your bag is empty</h1>
                <button onClick={handleContinueShopping}>CONTTINUE SHOPPING</button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && <div className="drawer-overlay" onClick={isClosed} />}
    </div>
  );
};

export default Drawer;