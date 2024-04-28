import React, { useState, useEffect } from 'react';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError(''); 
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simula una llamada asíncrona al servidor
    setTimeout(() => {
      if (username === 'usuario' && password === '1234') {
        
        console.log('Login exitoso');
        
      } else {
       
        setError('Usuario o contraseña incorrectos');
      }
    }, 1000); 
  }
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
