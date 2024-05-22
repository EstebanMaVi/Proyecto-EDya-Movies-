import React, { useState } from 'react';
import './Silleteria.css';
import imagen from '../../Imagenes/silla.png';

const Silleteria = () => {
  const [asientos, setAsientos] = useState([
    ['D', 'D', 'D', 'O', 'O', 'D', 'D', 'D'],
    ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'],
    ['O', 'D', 'D', 'D', 'D', 'D', 'D', 'D'],
    
  ]);

  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (row, col) => {
    const newAsientos = [...asientos];
    const currentState = newAsientos[row][col];

    if (currentState === 'D') {
      newAsientos[row][col] = 'S';
      setSelectedSeat({ row, col });
    } else if (currentState === 'S') {
      newAsientos[row][col] = 'D';
      setSelectedSeat(null);
    }

    setAsientos(newAsientos);
  };

  const handleReserveClick = () => {
    if (selectedSeat) {
      alert(`Ha reservado la silla ${selectedSeat.col + 1} de la fila ${selectedSeat.row + 1}`);
    } else {
      alert('Seleccione una silla antes de reservar.');
    }
  };

  const renderSeats = () => {
    return asientos.map((fila, rowIndex) => (
      <div key={rowIndex} className="fila">
        {fila.map((estado, colIndex) => (
          <div key={colIndex} className={`asiento ${estado}`} onClick={() => handleSeatClick(rowIndex, colIndex)}>
            <img src={imagen} className='img'/>
                <span className={`estado ${estado === 'O' ? 'ocupado' : ''}`}>{estado === 'D' ? 'Disponible' : 'Ocupado'}</span>
              
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="silleteria-container">
      <h2>Selección de Asientos</h2>
      <div className="seating-map">
        {renderSeats()}
      </div>
      <div className="booking-details"></div>
      <button className="btn-book" onClick={handleReserveClick}>Reservar</button>
    </div>
  );
};

export default Silleteria;
