import React from 'react'

const Username = ({params}) => {
  return (
    <>
    {params.username}
    <div className='cover w-full bg-red-300'>
        <img className='object-cover w-full h-[450px]' src=" https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />   

    </div>        
    <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2'>
      <img className='rounded-lg border-2 border-slate-600' width={150} height={150} src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg" alt="" />
    </div>

    </>
  )
}

export default Username

