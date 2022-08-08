import {FC, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../types/UserContext'
import NavbarExample from '../Navbar/Navbar'

const Home:FC = () => {
  const {isLoggedin,performLogout} = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(()=>{
    if (!isLoggedin){
      navigate("/login")
    }
  },[isLoggedin])
  return (
    <>
    {/* <nav>
      <Link to= '/dashboard'>Dashboard</Link>
      <Link to= '/about'>About</Link>
      <Link to= '/home'>Ho</Link>
      <button onClick={performLogout}>Log out</button>
    </nav> */}
    <NavbarExample/>
      <div>Welcome to the home page</div>
   
    </>

  )
}

export default Home