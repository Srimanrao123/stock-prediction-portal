import {useContext} from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
    const {isLoggedIn , setIsLoggedIn} = useContext(AuthContext)
    const handleLogout = () => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      setIsLoggedIn(false)
      useNavigate('/login')

    }
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
    <Link to="/" className='navbar-brand text-light'>Stock Prediction Portal</Link>
    <div>
      {isLoggedIn ? (
        <>
        <button onClick={handleLogout} class='btn btn-danger'>Logout</button>
                <Button text='Das' class="btn-info" url='/register'/>
        </>) : (<><Button text='Login' class='btn-outline-info' url='/login'/>
        &nbsp;
        <Button text='Register' class="btn-info" url='/register'/> </>)}
        
    </div>
        </nav>

    </>
  )
}

export default Header