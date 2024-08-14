import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form 
        className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input type="text" placeholder='What would you like to Search Today..?' className='p-4 m-4 col-span-9 '/>
            <button className=' text-white bg-transparent border border-white rounded-md font-semibold col-span-3 m-4 py-2 px-4'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar