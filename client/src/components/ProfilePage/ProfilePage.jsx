import React from 'react'
import './ProfilePage.css'
import {useContext} from 'react'
import {authContext} from './../../authContext'

function ProfilePage() {
  const auth = useContext(authContext);
  return (
    <div className='profile-card'>
      <h2 className='welcome-msg'>Welcome {auth.user}</h2>
    </div>
  )
}

export default ProfilePage