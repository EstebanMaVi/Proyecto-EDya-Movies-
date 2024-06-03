import React from 'react'
import NavbarUser from '../components/NavbarUser'
import {useNavigate} from 'react-router-dom'
import imgGracias from '../assets/img/gracias.jpg'
import styles from '../styles/Compra.module.css'

export default function Compra() {
    const navigate = useNavigate()

  return (
    <div className={styles.cuerpo}>
        <NavbarUser />
        <div className={styles.cotainer}>
        <h1 className={styles.titulo}>Compra realizada</h1>
        <img src={imgGracias} alt="Imagen de gracias" className={styles.imga}/>
        <hr></hr>
        <button onClick={() => navigate('/dashboard')} className={styles.botona}>Volver</button>
        <button onClick={() => navigate('/')} className={styles.botona}>Cerrar sesión</button>
        </div>
    </div>
  )
}
