import { Link } from 'react-router-dom'
import styles from '../styles/NavbarUser.module.css'
import logo from '../assets/img/logoNavbar.png'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export default function NavbarUser() {

    const {user} = useContext(UserContext)
    console.log(styles);

  return (
    <nav className={styles.Navbar}>
      <h1>
      <img src={logo} alt="Logo de CineCali" /> {/* Agregamos la imagen del logo */}
        CineCali
      </h1>
      <Link to="/Dashboard">Peliculas</Link>
      <Link to="/confiteria">Confitería</Link>
      <Link to="/carrito">Carrito</Link>
      <>{!!user && (<h2>Usuario {user.name}</h2>)}</>
    </nav>
  )
}