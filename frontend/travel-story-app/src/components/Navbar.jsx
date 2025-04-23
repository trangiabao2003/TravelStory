import LOGO from '../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'
import ProfileInfo from './Cards/ProfileInfo'

const Navbar = ({ userInfo }) => {
    const isTonken = localStorage.getItem("token")
    const navigate = useNavigate()

    const onLogout =() =>{
        localStorage.clear()
        navigate("/login")
    }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow sticky top-0 z-10'>
        <img src={LOGO} alt='travel story' className='h-9'/>
        
        {isTonken && <ProfileInfo userInfo ={userInfo} onLogout={onLogout}/>}
    </div>
  )
}

export default Navbar