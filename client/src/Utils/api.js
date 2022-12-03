import axios from 'axios'
const server_url = 'http://localhost:5000/auth'

export const register = async (userDetails) =>{
    try{
        const response = await axios.post(`${server_url}/register`, userDetails)
        //console.log(response)
        return response;
    }
    catch(error){
        console.log(error.message)
    }
}

export const login = async (loginDetails) =>{
    try{
        const response = await axios.post(`${server_url}/login`, loginDetails)
        console.log(response)
        return response;
    }
    catch(error){
        console.log(error.message)
    }
}