import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ user, children }) {
    // const token = cookie.get("TOKEN");
    // I think it is better to check if there is any user like if(user)
    // because checking token in this way is not secure
    // also, sending a request to the server fot this route seems to be not effective

    // console.log(user);

    return ( user ? 
        children : 
        <Navigate
            replace = {true}
            to = '/login'
        />
    )
}
