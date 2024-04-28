import React from 'react';
import './confiteria.css';

const Confiteria = () => {

  return (

    <div className="confiteria-page">
      <h2>Food Menu</h2>
      <div className="confiteria-container">
        <div className="confiteria-item">
          <img src="food1.jpg" alt="Popcorn" />
          <h3>Popcorn</h3>
          <p>Deliciosas palomitas</p>
          <span>$5.99</span>
        </div>
        <div className="confiteria-item">
          <img src="food2.jpg" alt="Soda" />
          <h3>Soda</h3>
          <p>Refrescante soda</p>
          <span>$3.49</span>
        </div>
        <div className="confiteria-item">
          <img src="food3.jpg" alt="Hot Dog" />
          <h3>Hot Dog</h3>
          <p>Hot Dog clasico con queso.</p>
          <span>$4.99</span>
        </div>
        {/* Agrega más elementos de comida según sea necesario */}
      </div>
    </div>
  );
};

export default Confiteria;
