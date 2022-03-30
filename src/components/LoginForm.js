import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookie = new Cookies();

export default function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const configuration = {
      method: 'post',
      url: "http://localhost:5000/login",
      data: {
        email,
        password
      }
    }

    axios(configuration)
      .then( (result) => { 
        setLogin(true);
        cookie.set("TOKEN", result.data.token, {
          path: '/'
        })
        handleLogin({
          email: email,
        })
      })
      .catch( (error) => { 
        console.error(error); 
        setTryAgain(true);
      })
  }

  return (
    <>
      { loggedIn ? (
        <div>
          <p className='text-success'>Succesfully Signed In!</p>
          <Link className='btn btn-primary' to = '/connect'>Start!</Link>
        </div>
      ) : ( 
        <form className="col" onSubmit={submitHandler}>
          <div className="row-auto">
            {/* <label htmlFor="staticEmail2" className="visually-hidden">Email</label> */}
            <input type="text" className="form-control" id="email" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} value = {email}/>
          </div>
          <div className="row-auto">
            {/* <label htmlFor="inputPassword2" className="visually-hidden">Password</label> */}
            <input type="password" className="form-control mt-2" id="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} value = {password}/>
          </div>
          <div className="row-auto">
            <button type="submit" className="btn btn-primary mb-3 mt-2">Login</button>
          </div>
          {tryAgain ? (<p className='text-danger'>Try Again!</p>):(<></>)}
        </form>
       )}
      
    </>
  )
}
