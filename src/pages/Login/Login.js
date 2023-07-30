import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Heading from '../../components/Heading'

import './login.css'
export default function Login() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ showAlert, setShowAlert ] = useState(false)


  const handleSignIn = () => {
    setShowAlert(true)

    setEmail('')
    setPassword('')

    setTimeout(() => {
      setShowAlert(false);
    }, 3000)
  }

      return (
        <div className="login">
          <Navbar />
            <Heading heading={"Login"} className="login-heading" />
            <div  className='account'>
                <div className='account-email'>
                    <input 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='account-password'>
                    <input 
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='account-button'>
                    <button onClick={handleSignIn}>SIGN IN</button>
                </div>
            </div>
            {showAlert && (
              <div className='alert'>
                <p>
                  Signed in!
                </p>
              </div>
            )}
        </div>
      );
}