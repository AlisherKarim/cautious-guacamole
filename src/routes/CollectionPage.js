import React, { useEffect } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export default function CollectionPage({ user }) {

    useEffect(() => {
        const token = cookie.get('TOKEN');
        const configuration = {
            method: 'post',
            url: "http://localhost:5000/site/",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                email: user.email,
            }
        }



    }, [])

    return (
        <div>
            Hello!
        </div>
    )
}
