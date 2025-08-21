import React, { useContext } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'



function Login() {
  const navigate = useNavigate()
  const {isLoggedIn , setIsLoggedIn} = useContext(AuthContext)
  const [error,setError] = useState("")
const [registerData,setRegisterData]=useState({
        "username":"",
        "password":""
    })
const [loading,setloading]=useState(false)
const DataHandle= (e) => {
        setRegisterData({...registerData,[e.target.name]:e.target.value})
    }
 const handleSubmit =async (e) => {
    e.preventDefault();
    setloading(true);
  try{
        const response =await axios.post("http://127.0.0.1:8000/api/token/",registerData)
        localStorage.setItem('accessToken',response.data.access)
        localStorage.setItem('refreshToken',response.data.refresh)
        setIsLoggedIn(true)
        setError("")
        console.log("Login successful")
        
    }
    catch(error){
        setError("Invalid Credentials")
        
    }finally{
        setloading(false)
    }

 }
  return (
    <>
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-center text-light mb-4'>Login Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                        <input type='text' className='form-control mb-3' name='username' value={registerData.username} onChange={DataHandle} placeholder='Enter Username' />
                        </div>

                        <div className='mb-3'>
                        <input type='password' className='form-control mb-5' name='password' value={registerData.password} onChange={DataHandle} placeholder='Set Password'/> 
                        </div>
                        {error && <p className='text-danger'>{error}</p>}                       

                            {loading ? <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Logging in </button> : <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>}
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login