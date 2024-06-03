import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import logo from '../assets/img/logoNavbar.png'

export default function Navbar() {

  console.log(styles);

  return (
    <nav className={styles.Navbar}>
      <h1>
      <img src={logo} alt="Logo de CineCali" /> {/* Agregamos la imagen del logo */}
        CineCali
      </h1>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}