import { useContext } from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'
import {authContext} from './../../authContext'

function Home() {
  const auth = useContext(authContext)
  return (
    <>
      <h1 className='title'>Learn JSON Web Token (JWT)</h1>
        <div className='button-container'>
          <NavLink to='/register'><button className='button'>Register</button></NavLink>
          <NavLink to='/login'><button className={`button ${auth.user? "hide" : ''} `}>Login</button></NavLink>
          
      </div>
      <div className='roles-container'>
        <NavLink to='/superadmin'><button className='button superadmin'>Super Admin</button></NavLink>
        <NavLink to='/admin'><button className='button admin'>Admin</button></NavLink>
        <NavLink to='/user'><button className='button user'>User</button></NavLink>
      </div>
    </>
    
  )
}

export default Home