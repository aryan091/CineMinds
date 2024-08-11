import React , {useState} from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>

        <img src={BG_URL} alt="Bg-Image" />
        </div>

<form action="" className='absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg'>

    <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>


{ !isSignInForm && (<input type="text" placeholder="Full Name" className=' p-4 my-4 w-full bg-transparent border border-gray 
rounded-lg' />)
}
    <input type="text" placeholder="Email" className=' p-4 my-4 w-full bg-transparent border border-gray rounded-lg'  />

    <input type="Password" placeholder="Password" className=' p-4 my-4 w-full bg-transparent border border-gray rounded-lg'  />

    <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>

    <p className='text-neutral-300 py-4'>{isSignInForm ? "New to Stream AI?" : "Already have an account?"} <span className='text-white font-semibold cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? "Sign Up Now" : "Sign In"}.</span></p>

</form>

    </div>
  )
}

export default Login