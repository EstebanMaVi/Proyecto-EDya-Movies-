import React, { useEffect, useState } from 'react'
import NavbarUser from '../components/NavbarUser'
import * as styles from '../styles/Carrito.module.css';
import imgnoitems from '../assets/img/No items.png'
import {useNavigate} from 'react-router-dom'

export default function Carrito() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const itemParam = urlParams.get('item');
    if (itemParam) {
      const item = JSON.parse(decodeURIComponent(itemParam));
      handleAddToCart(item);
    }
  }, []);

  const handleAddToCart = (item) => {
    if (item.type === 'ovieinfo' || item.type === 'combo') {
      const existingItem = cartItems.find((i) => i.name === item.name && i.type === item.type);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        item.quantity = 1;
        setCartItems([...cartItems, item]);
      }
    }
  };

  const handleRemoveFromCart = (item) => {
    const itemIndex = cartItems.findIndex((i) => i.name === item.name && i.type === item.type);
    if (itemIndex!== -1) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity -= 1;
      if (newCartItems[itemIndex].quantity <= 0) {
        newCartItems.splice(itemIndex, 1);
      }
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const handleCheckout = () => {
    console.log("Realizando compra...");
    // Aquí puedes agregar la lógica para realizar la compra
    localStorage.removeItem("cartItems");
    navigate('/compra')
  };

  return (
    <div>
      <NavbarUser />
      {cartItems.length === 0 ? (
        <div>
          <img src={imgnoitems} alt="No hay items en el carrito" className={styles.noitems} />
          <h1 style={{ display: 'none' }}>Items a pagar</h1>
        </div>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.itemti}>Items a pagar</h1>
          <ul className={styles.li}>
            {cartItems.map((item) => (
              <li key={item.name + item.type} className={styles.ulis}>
                <div>
                  <h3>{item.name}</h3>
                  {Object.keys(item).map((key) => (
                    <p key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {item[key]}</p>
                  ))}
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <div>
                  <button onClick={() => handleRemoveFromCart(item)} className={styles.ulisbuton}>Quitar</button>
                </div>
              </li>
            ))}
          </ul>
          {cartItems.length > 0 && (
            <button onClick={handleCheckout} className={styles.botona}>Realizar compra</button>
          )}
        </div>
      )}
    </div>
  );
}