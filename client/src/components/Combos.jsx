import React, {useEffect, useState} from 'react'
import {useRef} from 'react'
import {data} from '../assets/data'
import * as styles from '../styles/Combosestilos.css';
import {toast} from 'react-hot-toast'

export const Combos = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  const showCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("Cart Items:");
    cartItems.forEach((item) => {
      console.log(`${item.name} - ${item.price} - Quantity: ${item.quantity}`);
    });
  };

  const handleAddToCart = () => {
    const item = {
      name: data[currentIndex].title,
      price: data[currentIndex].price,
      quantity: 1,
      type: 'confiteria'
    };
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("Item agregado al carrito");
    toast.success('Item agregado al carrito')
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">
          <ul ref={listRef}>
            {
              data.map((item) => {
                return <li key={item.id}>
                  <img src={item.imgUrl} width={500} height={280} />
                </li>
              })
            }
          </ul>
        </div>
        <div className="dots-container">
          {
            data.map((_, idx) => (
              <div key={idx}
                className={`dot-container-item ${idx === currentIndex? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
      </div>
      <div className="info-container">
        <h2>{data[currentIndex].title}</h2>
        <p>{data[currentIndex].description}</p>
        <button onClick={handleAddToCart}> Agregar al carrito</button>
      </div>
    </div>
  )
}