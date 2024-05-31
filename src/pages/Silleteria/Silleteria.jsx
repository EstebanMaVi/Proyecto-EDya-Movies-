import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Silleteria.css';

const Silleteria = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const preSelectedSeats = [20, 21, 22, 23, 24, 25];
  const [selectedSeats, setSelectedSeats] = useState(preSelectedSeats);

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

  const seatLayout = [
    [null, null, 1, 2, 3, 4, 5, 6, null, null],
    [null, null, 7, 8, 9, 10, 11, 12, null, null],
    [13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    [33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
    [null, null, 43, 44, 45, 46, 47, 48, null, null],
    [null, null, 49, 50, 51, 52, 53, 54, null, null]
  ];

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  return (
    <div className="Silleteria">
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>

      <div className='info'>
          <p>Ocupados</p>
          <p>Disponible</p>
          <p>Reservado</p>
      </div>
      <div className="seat-selection">
        <h3>Pantalla</h3>
        <div className="seats">
          {seatLayout.map((row, rowIndex) => (
            <div className="seat-row" key={rowIndex}>
              {row.map((seat, seatIndex) => (
                seat ? (
                  <button
                    key={seat}
                    className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                    onClick={() => toggleSeatSelection(seat)}
                  />
                ) : (
                  <div key={seatIndex} className="seat-placeholder" />
                )
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="add-to-cart" onClick={() => alert('Added to cart')}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default Silleteria;
