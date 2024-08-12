import React from 'react'
import { LOGO , USER_AVATAR } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {

    const user = useSelector(store => store.user);
    console.log(user);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
        // An error happened.
        });
    }

  return (
    <div className='header w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
        <img src={LOGO} alt="Logo" className='logo w-44'/>

        {user && (<div  className='flex gap-4'>
            <img src={user?.photoURL}  
            className='w-12 h-12'
            alt="User" />
            <button  className="font-bold text-white "
            onClick={handleSignOut}
            >
            (Sign Out)
          </button>
        </div>)}

    </div>

  )
}

export default Header