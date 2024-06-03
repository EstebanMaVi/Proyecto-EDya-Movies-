import React from 'react';
import styles from '../styles/Nosotros.module.css'; 
import Navbar from '../components/Navbar';

const Nosotros = () => {
  return (
    <div>
        <Navbar />
    <div className={styles.aboutcontainer}>
      <h1>Nosotros</h1>
      <p>
        ¡Bienvenido a nuestro portal de cine! Nos dedicamos a traerte
        las últimas y mejores películas que están actualmente de moda
        en los cines. Nuestro equipo está formado por profesionales
        con experiencia, apasionados por el cine y comprometidos con
        ofrecer una excelente experiencia al usuario.
      </p>
      <h2>Nuestro equipo</h2>
      <div className={styles.team}>
        <div className={styles.teammember}>
          <img src="src/assets/img/esteban.jpeg" alt="Esteban" className={styles.teamphoto} />
          <h3>Esteban Marini Viteri</h3>
          <p>Backend Developer</p>
        </div>
        <div className={styles.teammember}>
          <img src="src/assets/img/nata.jpeg" alt="Natalia" className={styles.teamphoto} />
          <h3>Natalia Cajiao Castillo</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
      <footer className={styles.footer}>
        <h2>Contacto</h2>
        <ul>
          <li>Email: natalia.cajiao@uao.edu.co</li>
          <li>Email: esteban.marini@uao.edu.co</li>
        </ul>
      </footer>
    </div>
    </div>
  );
};

export default Nosotros;