import { useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import styles from '../styles/Login.module.css'
import logo from '../assets/img/userLogo2.png'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:'',
  })

  const loginUser = async (e) => {
    e.preventDefault()
      const {email, password} = data
      try {
        const {data} = await axios.post('/login', {
          email,
          password
        });
        if(data.error) {
          toast.error(data.error)
        }else{
           setData({});
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className='container'>
      <img src={logo} alt="Logo usuario" className={styles.containerlogo} />   
      <form onSubmit={loginUser}>
      <label>Email</label>
        <input type="email" placeholder='someone@gmail.com' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type="password" placeholder='Enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
