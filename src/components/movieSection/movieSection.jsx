import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './movieSection.css';

const MovieSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovieData();
  }, []);

  async function getTrendingMovieData() {
    try {
      const api_key = 'b003070e684123b936cc7e1680a7ac1e';
      const resp = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=es-MX&api_key=${api_key}`);
      setMovies(resp.data.results.slice(0, 15)); // Mostrar solo 15 películas
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <section className="movies-section">
      <h2>Cartelera</h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.overview.length > 100 ? movie.overview.substring(0, 100) + '...' : movie.overview}</p> {/* Texto más corto */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
