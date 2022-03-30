import React from 'react'
import ConnectForm from '../components/ConnectForm'

export default function ConnectPage({ user }) {
  return (
    <div>
        <ConnectForm user = {user} />
    </div>
  )
}
