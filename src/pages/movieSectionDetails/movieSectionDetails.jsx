import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './movieSectionDetails.css';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const horarios2D = ['12:00', '15:30', '18:45', '21:00'];
  const horarios3D = ['16:30', '19:45', '21:00'];

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
    <div className='movie-details'>
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
              <p>Combo soda</p>
              <span>$27.400</span>
            </div>
          </div>
          <div className='confiteria-item'>
            <img src="/images/food2.jpg" alt="Hot Dog" />
            <div>
              <p>Combo perro</p>
              <span>$40.400</span>
            </div>
          </div>
          <div className='confiteria-item'>
            <img src="/images/food1.jpg" alt="Popcorn" />
            <div>
              <p>Combo palomitas</p>
              <span>$38.400</span>
            </div>
          </div>
          
          


        </div>

        <div className='horarios-box'>
          <div>
            <p>2D</p>
            <div className='horarios-2d'>
              {horarios2D.map((time, index) => (

                <Link key={index} 
                to={`/silleteria/${movie.id}`} 
                className='horarios-item'>
                {time}
                </Link>

              ))}
            </div>
          </div>
          <div>
            <p>3D</p>
            <div className='horarios-3d'>
              {horarios3D.map((time, index) => (

                <Link key={index} to={`/silleteria/${movie.id}`} className='horarios-item'>
                  
                  {time}
                </Link>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
