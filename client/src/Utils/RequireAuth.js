import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import {useContext} from 'react'
import {authContext} from '../authContext'

function RequireAuth({children}) {
    const location = useLocation();
    const auth = useContext(authContext)
    if(!auth.user){
        return <Navigate to='/login' state={{path:location.pathname}} ></Navigate>
    }

    return children;
  
}

export default RequireAuth