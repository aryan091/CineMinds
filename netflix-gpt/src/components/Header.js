import React , { useEffect } from 'react'
import { LOGO , USER_AVATAR } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {toggleGptSearchView} from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import {changeLanguage} from '../utils/configSlice'
const Header = () => {

    const user = useSelector(store => store.user);
    const gptView = useSelector(store => store.gpt.showGptSearch);

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

          // Unsubscribe from auth state changes when component unmounts
          return () => {
            unsubscribe();
          }
    }, [])


    const handleGPTSearchClick = () => {
      dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (event) => {
      dispatch(changeLanguage(event.target.value))
    }

  return (
    <div className='header w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between flex-col md:flex-row items-center'>
        <img src={LOGO} alt="Logo" className='logo w-44 md:mx-0 mx-auto '/>

        {user && (
          
          
          <div  className='flex justify-around gap-4'>

{        gptView &&    (<select className='p-2 m-2 bg-slate-900 text-white font-semibold' onClick={handleLanguageChange}>
{
  SUPPORTED_LANGUAGES.map((language) => (
    <option key={language.identifier} value={language.identifier}
  
    >{language.name}</option>
  ))
}
            </select>)}

            <button type="button" className='py-2 px-4 text-white bg-transparent border border-white rounded-md font-semibold mx-4 bg-gradient-to-b from-black' onClick={handleGPTSearchClick}>
              {gptView ? "Home" : "GPT Search"}
            </button>
            
            <img src={user?.photoURL}  
            className='w-12 h-12 hidden md:inline rounded-full'
            alt="User" />
            <button  className=" font-bold text-white bg-gradient-to-b from-black"
            onClick={handleSignOut}
            >
            (Sign Out)
          </button>
        </div>)}

    </div>

  )
}

export default Header