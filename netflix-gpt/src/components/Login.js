import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile   } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();

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
        navigate("/browse");

      }).catch((error) => {
       setErrorMessage(error.message);
      });
      
    console.log("User : ",user);

  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);

});


    }
    else
    {
        // Means Sign In
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User : ",user);
    navigate("/browse");
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
        <img src={BG_URL} alt="Bg-Image" />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg">
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
