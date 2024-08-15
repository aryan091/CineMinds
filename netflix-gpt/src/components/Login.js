import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile   } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let message;
    if (isSignInForm) {
      message = checkValidData(null, email.current.value, password.current.value, isSignInForm);
    } else {
      message = checkValidData(name.current.value, email.current.value, password.current.value, isSignInForm);
    }

    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm) {

        // Means Sign Up
 createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/59964730?v=4"
      }).then(() => {              
        const {uid , email, displayName , photoURL} = auth.currentUser;

        dispatch(addUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}));

      }).catch((error) => {
        dispatch(removeUser)
       setErrorMessage(error.message);
      });
      
    console.log("User : ",user);

  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
    dispatch(removeUser)

});


    }
    else
    {
        // Means Sign In
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User : ",user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
   
  });

    }

  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="Bg-Image"  className='h-screen w-screen object-cover'/>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 w-full md:w-3/12 my-28 bg-black  md:my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-4 w-full bg-transparent border border-gray rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="p-4 my-4 w-full bg-transparent border border-gray rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-4 w-full bg-transparent border border-gray rounded-lg"
        />

        <p className="text-red-500 text-center font-semibold py-2">{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="text-neutral-300 py-4">
          {isSignInForm ? 'New to Stream AI?' : 'Already have an account?'}{' '}
          <span className="text-white font-semibold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? 'Sign Up Now' : 'Sign In'}.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
