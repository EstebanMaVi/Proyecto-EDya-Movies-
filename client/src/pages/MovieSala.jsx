import React, { useState } from 'react';
import { datamovies } from '../assets/dajamovies';
import { dataSala } from '../assets/dataSala';
import NavbarUser from '../components/NavbarUser';
import styles from '../styles/MovieSala.module.css';

export default function MovieSala() {
  const urlParams = new URLSearchParams(window.location.search);
  const texto = urlParams.get('texto');
  const id = parseInt(texto.split(' ')[0]);

  const movie = datamovies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>No se encontró la película</div>;
  }

  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailerClick = () => {
    setShowTrailer(true);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('iframe')) {
      setShowTrailer(false);
    }
  };

  const salas = dataSala.filter((sala) => sala.salamovie === movie.id);

  return (
    <div>
      <NavbarUser />
      <h1 className={styles.peliti}>Pelicula a ver</h1>
      <div className={styles.salascontainer}>
        <h2>{movie.title}</h2>
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
          {salas.map((sala) => (
            <div key={sala.id} className={styles.sala}>
              <img src={`src/assets/img/${sala.name}.jpg`} alt={sala.name} />
              <h2>{sala.name}</h2>
              <a href={`/Sala?texto=${movie.id}`}>
                <button>Comprar</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}