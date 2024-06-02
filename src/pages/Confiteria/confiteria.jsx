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

        <div className="confiteria-item2">
          <img src="./images/hamburguesa.jpg" alt="Hamburguesa" />
          <h3>Hamburguesa</h3>
          <p>Deliciosa hamburguesa</p>
          <h4>Disfruta de una jugosa hamburguesa acompañada de crujientes papas fritas. El combo perfecto para una experiencia de sabor inigualable.</h4>

          <span>$45.990</span>
        </div>
        <div className="confiteria-item2">
          <img src="/images/malteada.jpg" alt="Malteada" />
          <h3>Malteada</h3>
          <p>Malteada de chocolate</p>
          <h4>Disfruta de una deliciosa y refrescante malteada de chocolate, el acompañamiento perfecto para cualquier snack.</h4>
          <span>$20.300</span>
        </div>

        <div className="confiteria-item2">
          <img src="./images/nachos.jpg" alt="Hot Dog" />
          <h3>Nachos</h3>
          <p>Nachos con guacamole.</p>

          <h4>Disfruta de crujientes nachos acompañados de guacamole fresco. ¡El snack perfecto para tu experiencia cinematográfica </h4>

          
          <span>$32.100</span>

          
        </div>
        
      </div>
    </div>
  );
};

export default Confiteria;
