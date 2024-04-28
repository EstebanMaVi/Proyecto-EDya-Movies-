import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./movieSection.css";

const MovieSection = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    getTrendingMovieData ("movie");
  }, []);
  
  async function getTrendingMovieData (){
    try{
      const api_key= 'b003070e684123b936cc7e1680a7ac1e';
      const resp = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`);
      console.log(21, resp.data.results);

      setMovies(resp.data.results);
    } catch (e){

    }
  }


  return (
    <section className="movies-section">
      <h2>Cartelera</h2>

      <div className="movie-container">
        {movies && movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
