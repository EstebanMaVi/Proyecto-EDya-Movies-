import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '../styles/FilsMenu.module.css';
import {datamovies} from '../assets/dajamovies'

export default function FilmsMenu() {

const navigate = useNavigate();

const movie1 = datamovies.find((movie) => movie.id === 1); // Buscar el objeto correspondiente
const movie2 = datamovies.find((movie) => movie.id === 2);
const movie3 = datamovies.find((movie) => movie.id === 3);
const movie4 = datamovies.find((movie) => movie.id === 4);
const movie5 = datamovies.find((movie) => movie.id === 5);
const movie6 = datamovies.find((movie) => movie.id === 6);
const movie7 = datamovies.find((movie) => movie.id === 7);
const movie8 = datamovies.find((movie) => movie.id === 8);
const movie9 = datamovies.find((movie) => movie.id === 9);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar el formulario;
  }

  return (
    <div>
      <h1 className={styles.titlePrin}>Peliculas disponbles</h1>
      <div className={styles.boxcontainer}>
        <div className={styles.boxcontainer1}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/1.webp" alt="Movie Poster" />
              <h2>{movie1.title}</h2>
              <p className={styles.description}>{movie1.description}</p>
              <p className={styles.recommend}>{movie1.age}</p>
              <h2 className={styles.duration}>{movie1.time}</h2>
              <a href={`/moviesala?texto=1`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer2}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/2.jpg" alt="Movie Poster" />
              <h2>{movie2.title}</h2>
              <p className={styles.description}>{movie2.description}</p>
              <p className={styles.recommend}>{movie2.age}</p>
              <h2 className={styles.duration}>{movie2.time}</h2>
              <a href={`/moviesala?texto=2`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer3}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/3.jpg" alt="Movie Poster" />
              <h2>{movie3.title}</h2>
              <p className={styles.description}>{movie3.description}</p>
              <p className={styles.recommend}>{movie3.age}</p>
              <h2 className={styles.duration}>{movie3.time}</h2>
              <a href={`/moviesala?texto=3`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer4}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/4.png" alt="Movie Poster" />
              <h2>{movie4.title}</h2>
              <p className={styles.description}>{movie4.description}</p>
              <p className={styles.recommend}>{movie4.age}</p>
              <h2 className={styles.duration}>{movie4.time}</h2>
              <a href={`/moviesala?texto=4`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer5}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/5.jpg" alt="Movie Poster" />
              <h2>{movie5.title}</h2>
              <p className={styles.description}>{movie5.description}</p>
              <p className={styles.recommend}>{movie5.age}</p>
              <h2 className={styles.duration}>{movie5.time}</h2>
              <a href={`/moviesala?texto=5`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer6}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/6.jpg" alt="Movie Poster" />
              <h2>{movie6.title}</h2>
              <p className={styles.description}>{movie6.description}</p>
              <p className={styles.recommend}>{movie6.age}</p>
              <h2 className={styles.duration}>{movie6.time}</h2>
              <a href={`/moviesala?texto=6`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer7}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/7.jpg" alt="Movie Poster" />
              <h2>{movie7.title}</h2>
              <p className={styles.description}>{movie7.description}</p>
              <p className={styles.recommend}>{movie7.age}</p>
              <h2 className={styles.duration}>{movie7.time}</h2>
              <a href={`/moviesala?texto=7`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer8}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/8.jpg" alt="Movie Poster" />
              <h2>{movie8.title}</h2>
              <p className={styles.description}>{movie8.description}</p>
              <p className={styles.recommend}>{movie8.age}</p>
              <h2 className={styles.duration}>{movie8.time}</h2>
              <a href={`/moviesala?texto=8`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      <div className={styles.boxcontainer9}>
          <div className={styles.box}>
              <img src="src/assets/imgmovies/9.jpg" alt="Movie Poster" />
              <h2>{movie9.title}</h2>
              <p className={styles.description}>{movie9.description}</p>
              <p className={styles.recommend}>{movie9.age}</p>
              <h2 className={styles.duration}>{movie9.time}</h2>
              <a href={`/moviesala?texto=9`}>
              <button>Ver pelicula</button>
              </a>
          </div>
      </div>
      </div>
    </div>
  );
}