import React from 'react'
import './Register.css'
import {useRef,useState, useEffect} from 'react'
import {register} from './../../Utils/api'
import {useNavigate} from 'react-router-dom'

function Register() {

  const initialValues = {
    name: '',
    email:'',
    username:'',
    password:'',
    mobile:''
  }
  const [userDetails, setUserDetails] = useState(initialValues)
  const [isError,setIsErrors] = useState(true)
  const [erros,setErrors] = useState([])
  const navigate = useNavigate()

  const handleOnChangeInput = (e)=>{
    console.log(userDetails)
    setUserDetails({...userDetails, [e.target.name]:e.target.value})
  }

  const handlePasswordConfirm = (e)=>{
    if(e.target.value !== userDetails.password){
      setErrors(erros.push("Password should match"))
      //console.log("Password should match")
    }
    else setIsErrors(false)
  }

  const handleRegister = async ()=>{
    if(!isError){
      const receivedResponse = await register(userDetails)
      console.log(receivedResponse)
      if(receivedResponse.status == 201){
        navigate('/userCreated')
      }
    }
    else console.log(erros)
  }

  return (
    <div className='form-container'>
      <h1>Register</h1>
      <form className='form'>
        <input name='name' onChange={(e)=>{handleOnChangeInput(e)}} placeholder='Full Name'></input>
        <input name='email' onChange={(e)=>{handleOnChangeInput(e)}} placeholder='Email'></input>
        <input name='username' onChange={(e)=>{handleOnChangeInput(e)}} placeholder='Username'></input>
        <input name='password' onChange={(e)=>{handleOnChangeInput(e)}} type='password' placeholder='Password'></input>
        <input name='confirm-password' onChange={(e)=>{handlePasswordConfirm(e)}} type='password' placeholder='Re-enter Password'></input>
        <input name='mobile' onChange={(e)=>{handleOnChangeInput(e)}} placeholder='Mobile: +971-xx-xxx-xxxx'></input>
      </form>
      <button onClick={(e)=>handleRegister(e)} className='register'>Register</button>
    </div>
  )
}

export default Register