"use client"
import React, { useState } from 'react'

const Quantity = () => {
  const [num,setNum]=useState(1);
  return (
    <div className='flex items-center gap-x-2'>
      {/* minus */}
      <button
      onClick={() => {
        setNum(num-1) 
      }}
      className='border rounded-full h-6 w-6 center'>
        -
      </button>
      {/* Number */}
      <span className="text-sm">3</span>
       {/*plus  */}
       <button
       onClick={() => {
        setNum(num+1) 
      }}
       
       className='border rounded-full h-6 w-6 center'>
        +
      </button>
     </div>
  )
}

export default Quantity
