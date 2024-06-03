import React, { useState } from 'react';
import { datamovies } from '../assets/dajamovies'; // Importar el array de datos
import Navbar from '../components/Navbar';
import styles from '../styles/MovieSala.module.css'; // Importar el archivo CSS

export default function MovieSalaHome() {
  const urlParams = new URLSearchParams(window.location.search);
  const texto = urlParams.get('texto');
  const id = parseInt(texto.split(' ')[0]); // Obtener el id desde el texto

  const movie = datamovies.find((movie) => movie.id === id); // Buscar el objeto correspondiente

  //Mostrar el trailer
  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailerClick = () => {
    setShowTrailer(true);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('iframe')) {
      setShowTrailer(false);
    }
  };

  if (!movie) {
    return <div>No se encontró la película</div>;
  }

  return (
    <div>
      <Navbar />
      <h1 className={styles.peliti}>Pelicula a ver</h1>
      <div className={styles.salascontainer}>
      <h2 >{movie.title}</h2>
      <img src={movie.imgUrl} alt={movie.title} className={styles.movieimg} />
      <p>{movie.description}</p>
      <button onClick={handleTrailerClick}>Ver trailer</button>
      {showTrailer && (
        <div
          className={styles.trailercontainer}
          onClick={handleOutsideClick}
          dangerouslySetInnerHTML={{ __html: movie.trailer }}
        />
      )}
      </div>
      <div className={styles.salascontainer}>
      <h1>Salas</h1>
      <div className={styles.salasgrid}>
        <div className={styles.sala}>
          <img src="src/assets/img/2D.jpg" alt="Sala 2D" />
          <h2>2D</h2>
        </div>
        <div className={styles.sala}>
          <img src="src/assets/img/3D.jpg" alt="Sala 3D" />
          <h2>3D</h2>
        </div>
        <div className={styles.sala}>
          <img src="src/assets/img/4DX.jpg" alt="Sala 4DX" />
          <h2>4DX</h2>
        </div>
      </div>
    </div>
    </div>
  );
}