import React from 'react';
import './confiteria.css';

const Confiteria = () => {

  return (

    <div className="confiteria-page">
      <h2>Food Menu</h2>
      <div className="confiteria-container">
        <div className="confiteria-item2">
          <img src="./images/food1.jpg" alt="Soda" />
          <h3>Popcorn</h3>
          <p>Deliciosas palomitas</p>
          <h4>Combo de Cine Completo! Palomitas, gaseosa y chocolate. ¡Todo lo que necesitas para disfrutar al máximo</h4>

          <span>$35.990</span>
        </div>
        <div className="confiteria-item2">
          <img src="/images/food3.png" alt="Popcorn" />
          <h3>Soda</h3>
          <p>Refrescante soda</p>
          <h4>Combo de 3 Gaseosas! Disfruta de la frescura y el sabor en cada sorbo mientras te sumerges en la emoción de la pantalla
            grande. ¡Refresca tu experiencia cinematográfica con nuestra selección de gaseosas</h4>
          <span>$30.400</span>
        </div>




        <div className="confiteria-item2">
          <img src="./images/food2.jpg" alt="Hot Dog" />
          <h3>Hot Dog</h3>
          <p>Hot Dog clasico con queso.</p>

          <h4>Combo Clásico! Disfruta de la compañía de un perro caliente deliciosamente preparado, acompañado
          de palomitas de maíz recién hechas y una refrescante soda para completar la experiencia. ¡Sumérgete en la emoción de la película con este combo clásico y satisfactorio </h4>

          
          <span>$47.909</span>
        </div>
        {/* Agrega más elementos de comida según sea necesario */}
      </div>
    </div>
  );
};

export default Confiteria;
