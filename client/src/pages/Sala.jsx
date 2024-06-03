import React, { useState } from 'react';
import NavbarUser from '../components/NavbarUser';
import { datamovies } from '../assets/dajamovies';
import { dataSala } from '../assets/dataSala';
import styles from '../styles/Sala.module.css';
import { dataSalaSillas } from '../assets/dataSalaSillas.js';
import {toast} from 'react-hot-toast'


export default function Sala() {
  const urlParams = new URLSearchParams(window.location.search);
  const texto = urlParams.get('texto');
  const id = parseInt(texto.split(' ')[0], 10); // Obtener el id desde el texto
  const movie = datamovies.find((movie) => movie.id === id);
  const salamovie = dataSala.find((sala) => sala.salamovie === movie.id);

  if (!salamovie) {
    console.error(`No salamovie found with id ${id}`);
    return null; // or render an error message
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [precio, setPrecio] = useState(0);
  const [ascientosguardados, setAscientosguardados] = useState('');
  const [seats, setSeats] = useState(dataSalaSillas[0]);

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedIndex(selectedIndex);
    if (selectedIndex === 0) {
      setMensaje('');
    } else {
      setMensaje('');
      setCantidad(0); // Resetear cantidad a 0
      setPrecio(0); // Resetear precio a 0
    }
  };

  const handleSeatClick = (seatKey) => {
    const newSeats = {...seats };
    if (newSeats[seatKey] === 'reserved') {
      // No hacer nada, asiento reservado
    } else if (newSeats[seatKey] === '') {
      newSeats[seatKey] = 'selected'; // Seleccionar
    } else {
      newSeats[seatKey] = ''; // Deseleccionar
    }
    setSeats(newSeats);
  };

  const guardasAscientos = () => {
    setAscientosguardados(Object.keys(seats).filter(key => seats[key] === 'selected').join(','));
    setCantidad(Object.keys(seats).filter(key => seats[key] === 'selected').length);
    console.log(ascientosguardados);
    if(ascientosguardados.length ==0){
      toast.error('No has seleccionado ascientos')
    }
  };

  const handleAddToCart = () => {
    const item = {
      name: movie.title,
      price: salamovie.price,
      quantity: cantidad,
      horario: salamovie.horario[selectedIndex],
      ubicacion: ascientosguardados,
      type: 'sala'
    };
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("Item agregado al carrito");
    toast.success('Item agregado al carrito')
  };

  return (
    <div>
      <NavbarUser />
      <h1 className={styles.salo}> Sala {salamovie.name} </h1>
      <h2>Número {salamovie.room}</h2>
      <p>Mapa de la sala</p>
      <div className={styles.cinemamap}>
        <div className={styles.seatsrow}>
          {Object.keys(seats).map((seatKey, index) => (
            <div
              key={index}
              className={styles.seat}
              onClick={() => handleSeatClick(seatKey)}
              style={{ backgroundColor: seats[seatKey] === 'selected'? '#46cdec' : seats[seatKey] === 'reserved'? '#2b4049' : '#000000' }}
            ></div>
          ))}
        </div>
        <div className="screen"></div>
        <button onClick={() => {
          guardasAscientos();
          setPrecio(cantidad * salamovie.price);
        }}>Seleccionar sillas
        </button>
      </div>
      <div>
        <div>
        <h2>Detalles</h2>
        <img src={movie.imgUrl} alt={movie.name} className={styles.imglog}/>
    <p>Nombre: {movie.title}</p>
    <p>Ubicacion: {ascientosguardados}</p>
    <div className={styles.selectcontainer}>
      <select type="selector" onChange={handleSelectChange}>
        <option value="">Seleccione un horario</option>
        {Object.keys(salamovie.horario).map((key) => (
          <option key={key} value={salamovie.horario[key]}>{salamovie.horario[key]}</option>
        ))}
      </select>
    </div>
    <p>{mensaje}</p>
    {selectedIndex > 0 && (
      <>
        <h2>Cantidad: {cantidad}</h2>
        <h2>Precio: {precio}</h2>
        {cantidad > 0 && (
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        )}
      </>
    )}
  </div>
</div>
    </div>
  );
}