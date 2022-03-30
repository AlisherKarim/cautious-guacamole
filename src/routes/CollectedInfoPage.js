import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookie = new Cookies();

export default function CollectedInfoPage({ user }) {
    const [allSites, setAllSites] = useState([]);

    useEffect(() => {
        const token = cookie.get('TOKEN');
        const configuration = {
            method: 'post',
            url: "http://localhost:5000/sites",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                email: user.email,
            }
        }

        axios(configuration)
            .then(result => {
                console.log(result);
                setAllSites(result.data.sites);
            })
            .catch(error => {
                console.log(error);
            })

    }, [])

    return (
        <div className='container'>
            {allSites.length !== 0 ? (
                    <ul className='list-group' style={{'marginTop': 100}}>
                        {
                            allSites.map(site => {
                                return (
                                    <li className='text-info list-group-item list-group-item-action' key={site._id}>
                                        <Link to={'/collections/' + site._id}>
                                            {site.link}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
                : (
                    <h2 className='text-info'>No items in collections</h2>
                )
            }
        </div>
    )
}
