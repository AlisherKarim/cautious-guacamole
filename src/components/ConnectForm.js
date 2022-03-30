import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies();

export default function ConnectForm({ user }) {

    const [link, setLink] = useState('');
    const [connected, setConnected] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("link: ", link);
        const token = cookie.get('TOKEN');

        const configuration = {
            method: 'post',
            url: "http://localhost:5000/add",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                email: user.email,
                link: link
            }
        }

        axios(configuration)
            .then(result => {
                console.log(result);
                setConnected(true);
            })
            .catch(error => console.log(error))

        
    }

    return (
        <div className='container' style={{'width': 400, 'marginTop': 100}}>
            {!connected ? 
                (
                    <form onSubmit={(e) => {submitHandler(e)}}>
                        <div className='form-group'>
                            <input className="form-control" type="text" placeholder="Your webpage" onChange = {(e) => {setLink(e.target.value)}}/>
                            <button className='btn btn-primary' type='submit' style={{'marginTop': 20}}>Connect!</button>
                        </div>
                    </form>
                ) : (
                    <div>
                        <p className='text-success'>Connected Successfully!</p>
                        <input className="form-control" type="text" placeholder="Your Script here" readOnly rows = '4'/>
                    </div>
                )
            }
        </div>
    )
}
