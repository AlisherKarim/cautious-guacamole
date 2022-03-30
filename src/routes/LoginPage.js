import React from 'react'
import LoginForm from '../components/LoginForm'

export default function LoginPage({ handleLogin }) {
  return (
    <>
        <div className='align-items-center'>
            <div className='container mt-5' style={{width: 300}}>
                <LoginForm handleLogin = { handleLogin }/>
            </div>
        </div>
    </>
  )
}
