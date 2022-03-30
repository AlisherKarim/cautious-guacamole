import React, { useState } from 'react'
import axios from 'axios';


export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signedUp, setSignedUp] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:5000/register",
            data: {
                email,
                password,
            },
        };

        axios(configuration)
        .then(result => {
            // console.log(result);
            setSignedUp(true);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <>
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
                    <button type="submit" className="btn btn-success mb-3 mt-2">Sign Up</button>
                </div>
                { signedUp ? (<p>Succesfully Signed Up!</p>) : (<p></p>)}
            </form>
        </>
    )
}
