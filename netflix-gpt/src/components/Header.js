import React from 'react'
import { LOGO , USER_AVATAR } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {

    const user = useSelector(store => store.user);
    console.log(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        console.log("Sign out");
        signOut(auth)
          .then(() => {
            dispatch(removeUser());
            navigate("/");
          })
          .catch((error) => {
            navigate("/error");
          });
      };
    

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