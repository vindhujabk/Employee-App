import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [ShowPopup, setShowPopup] = useState(false);
  let [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      setShowPopup(true);
      setError('')
    }
    // The below else part needs to be validated
    else{
      setError(true);
      error('Invalid credentials')  
    }
  }
  const handleOk = () => {
    navigate('/employees')
  }

  return (
    <div className='parent-div'>
      <div className='login-container'>
      <h1 className='login'>Login</h1>
      <div className='input-container'>
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={handleLogin} className='btn'>Submit</button>

      {ShowPopup && (
        <div className='login-popup'>
          <p>Login Sucessfull</p>
          <button onClick={handleOk} className='ok-btn'>Ok</button>
        </div>
      )}

      </div>
    </div>
  )
}