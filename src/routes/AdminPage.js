import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminPage({ user }) {
    return (
        <div>
            <h1>Connect your web page and analyse!</h1>
            <Link to='/connect' className='btn btn-primary'>Start!</Link>
        </div>
    )
}
