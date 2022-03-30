import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({user, handleLogout}) {
    console.log(user);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            { user ? (
                                
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/admin'>Admin Page</Link>
                                    </li> ) : (<></>)
                            }

                            {user ? (
                                    <li className='nav-item'>
                                        <Link className='nav-link' to = '/collections'>Collections</Link>
                                    </li>
                                
                            ) : (<></>)
                            }

                            {user ? (
                                    <li className='nav-item'>
                                        <Link className='nav-link' to = '/' onClick={ () => handleLogout() }>Log Out</Link>
                                    </li>
                                
                            ) : (<></>)
                            }
                            
                            { !user ? (
                                
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="/login">Login</a> */}
                                        <Link className='nav-link' to="/login">Login</Link>
                                    </li>
                            ) : (<></>)
                            }

                            { !user ? (
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="/login">Login</a> */}
                                        <Link className='nav-link' to="/signup">Sign Up</Link>
                                    </li>
                                
                            ) : (<></>)
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to='#'>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}
