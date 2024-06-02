import React from 'react';
import './Nosotros.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta y se importe correctamente

const Nosotros = () => {
  return (
    <div className="about-container">
      <h1>Nosotros</h1>
      <p>
        ¡Bienvenido a nuestro portal de cine! Nos dedicamos a traerte
        las últimas y mejores películas que están actualmente de moda
        en los cines. Nuestro equipo está formado por profesionales
        con experiencia, apasionados por el cine y comprometidos con
        ofrecer una excelente experiencia al usuario.
      </p>
      <h2>Nuestro equipo</h2>
      <div className="team">
        <div className="team-member">
          <img src="/images/esteban.jpeg" alt="Esteban" className="team-photo" />
          <h3>Esteban Marini Viteri</h3>
          <p>Backend Developer</p>
        </div>
        <div className="team-member">
          <img src="/images/nata.jpeg" alt="Natalia" className="team-photo" />
          <h3>Natalia Cajiao Castillo</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
      <footer className="footer">
        <h2>Contacto</h2>
        <ul>
          <li>Email: natalia.cajiao@uao.edu.co</li>
          <li>Email: esteban.marini@uao.edu.co</li>
        </ul>
      </footer>
    </div>
  );
};

export default Nosotros;
