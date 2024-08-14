import React , { useEffect } from 'react'
import { LOGO , USER_AVATAR } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {toggleGptSearchView} from '../utils/gptSlice'

const Header = () => {

    const user = useSelector(store => store.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        console.log("Sign out");
        signOut(auth)
          .then(() => {
          })
          .catch((error) => {
          });
      };
    

      useEffect(() => {
        const unsubscribe  = onAuthStateChanged(auth, (user) => {
            if (user) {
           
              const {uid , email, displayName , photoURL} = user;

              dispatch(addUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}));

              navigate("/browse");

            } else {
                dispatch(removeUser())
                navigate("/");
            }
          });

          // Unsubscribe from auth state changea when component unmounts
          return () => {
            unsubscribe();
          }
    }, [])


    const handleGPTSearchClick = () => {
      dispatch(toggleGptSearchView())
    }

  return (
    <div className='header w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
        <img src={LOGO} alt="Logo" className='logo w-44'/>

        {user && (
          
          
          <div  className='flex gap-4'>

            <button type="button" className='py-2 px-4 text-white bg-transparent border border-white rounded-md font-semibold mx-4' onClick={handleGPTSearchClick}>
              GPT Search
            </button>
            
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