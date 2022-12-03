import React from 'react'
import './Login.css'
import {useRef,useState, useEffect, useContext} from 'react'
import {authContext} from './../../authContext'
import {useNavigate, useLocation} from 'react-router-dom'
import { login } from '../../Utils/api'

const initialDetails = {
  username:'',
  password:''
}

function Login() {
  const auth = useContext(authContext);
  const [user,setUser] = useState();
  const location = useLocation();
  const redirectPath = location.state?.path || '/'
  const navigate = useNavigate();
  const [details, setDetails] = useState(initialDetails)

  

  const handleOnChange = (e)=>{
    console.log(details)
    setDetails({...details, [e.target.name] : e.target.value})
  }

  const handleLoginClick = async (e)=>{
    //console.log(details)
    const receivedResponse = await login(details)
    console.log(receivedResponse.status)
    if(receivedResponse.status == 201){
      console.log("Hi")
      auth.login(receivedResponse.data.name);
      navigate(redirectPath,{replace:true})
    }
  }

  return (
    <div className='form-container'>
      <h1>Login</h1>
      <form className='form'>
        <input name='username' onChange={e => handleOnChange(e)} type='text' placeholder='Username' ></input>
        <input name='password' onChange={e => handleOnChange(e)} type='password' placeholder='Password'></input>
      </form>
      <button className='register' onClick={handleLoginClick}>Login</button>
    </div>
  )
}

export default Login