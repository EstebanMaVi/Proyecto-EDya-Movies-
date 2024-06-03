import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import NavbarUser from '../components/NavbarUser'; // Importamos el componente NavbarUser
import FilmsMenu from '../components/FilmsMenu';

export default function Dashboard() {
  return (
    <div>
        <NavbarUser /> 
        <FilmsMenu />
    </div>
  )
}