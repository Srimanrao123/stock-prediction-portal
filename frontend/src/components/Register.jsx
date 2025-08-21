import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function Register() {
    const [registerData,setRegisterData]=useState({
        "username":"",
        "email":"",
        "password":""
    })
    const [errors,setErrors] = useState({})
    const [success,setSuccess]=useState('')
    const [loading,setloading]=useState(false)
    const DataHandle= (e) => {
        setRegisterData({...registerData,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setloading(true)
        
    try{
        const response =await axios.post("http://127.0.0.1:8000/api/register/",registerData)
        setErrors({})
        setSuccess("Registration Successfull")
        
    }
    catch(error){
        setErrors(error.response.data)
        console.log(error.response.data)
        
    }finally{
        setloading(false)
    }


    }
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-center text-light mb-4'>Create an Account</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                    <input type='text' className='form-control mb-3' name='username' value={registerData.username} onChange={DataHandle} placeholder='Enter Username' />
                    {errors.username && <small className='text-danger'>{errors.username}</small>}
                    </div>
                    <div className='mb-3'>
                    <input type='email' className='form-control mb-3' name='email' value={registerData.email} onChange={DataHandle} placeholder='Enter Email'/>
                    {errors.email && <small className='text-danger'>{errors.email}</small>}
                    </div>
                    <div className='mb-3'>
                    <input type='password' className='form-control mb-5' name='password' value={registerData.password} onChange={DataHandle} placeholder='Set Password'/>
                    {errors.password && <small className='text-danger'>{errors.password}</small>}
                    
                    </div>

                    {success && <div className='alert alert-success'>Registration Successful</div>}
                    {loading ? <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please Wait </button> : <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>}
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Register