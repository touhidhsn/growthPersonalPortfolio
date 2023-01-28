import React, {useState} from 'react';
import '../index.css'


export const Full = () => {
  const [show, setShow] = useState(false);
  const [showed, setShowed] = useState (false);
  const setFirst = () => {
    setShow(true);
    setShowed(false);
  }
  const setSecond =() => {
    setShow(false);
    setShowed(true);
  }
  const setHide = () => {
    setShow(false);
    setShowed(false)
  }
  return (
    <div className='bg-gradient-to-tl from-blue-600 to-indigo-400 min-h-screen flex justify-center items-center text-center'>
      <div>
         {show?<h1 className='text-red-500 text-2xl'>Checking</h1>:null}
        </div>
        <div>
          {showed?<h1 className='text-blue-800'>Checking number 2</h1>:null}
          {showed?<h1 className='text-blue-800'>Checking number 3</h1>:null}
          
        </div>
      <div>
        <button onClick={()=> setFirst()} className='bg-gray-100 outline-1 p-2 rounded hover:bg-gray-400'>Show</button></div>
         <button onClick={()=> setSecond() } className='bg-red-300 outline p-2 rounded' >Showed</button>
      <div>
        <button onClick={()=> setHide()} className='bg-gray-100 outline-1 p-2 rounded hover:bg-gray-400'>Hide</button></div>
    </div>
  )
}

export default Full;