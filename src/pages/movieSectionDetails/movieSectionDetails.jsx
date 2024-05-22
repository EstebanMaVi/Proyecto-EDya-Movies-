import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './movieSectionDetails.css';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const api_key = 'b003070e684123b936cc7e1680a7ac1e';
        const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=es-MX&api_key=${api_key}`);
        setMovie(resp.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-section'>
      <div className='imagen-detalle'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className='Movieconten-texto'>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        

        <div className='confiteria-box'>

          
          <div className='confiteria-item'>
            <img src="/images/food3.png" alt="Soda" />
            <div>
              <p>combo soda</p>
              <span>$27.400</span>
            </div>
          </div>

          <div className='confiteria-item'>
            <img src="/images/food2.jpg" alt="Hot Dog"  />
            <div>
              <p>combo perro</p>
              <span>$40.400</span>
            </div>
          </div>


          <div className='confiteria-item'>
            <img src="/images/food1.jpg" alt="Popcorn" />
            <div>
              <p>combo palomitas</p>
              <span>$38.400</span>
            </div>
          </div>

          
        </div>
        <li className="nav-item">
                  <Link to="/silleteria" className="nav-link">
                    Silleteria
                  </Link>
                </li>
      </div>
     
    </div>
    
  );
};

export default MovieDetails;
