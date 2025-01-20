"use client"
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import React, {useState} from 'react'


const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if (session) {
  //   return <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
    
  // }


  return (
    <nav className='bg-slate-900 text-white flex justify-between h-16 items-center p-4 border border-black '>

          <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center">
            <img src="tea.gif" width={48} alt="" />
            <span>Get Me a Chai</span>  
          </Link>
 
        {/* <ul className='flex justify-between gap-4  '>
            
            <li className='cursor-pointer hover:font-bold text-xl'>Home</li>
            <li className='cursor-pointer hover:font-bold text-xl'>About</li>
            <li className='cursor-pointer hover:font-bold text-xl'>Projects</li>
            <li className='cursor-pointer hover:font-bold text-xl'>SignUp</li>
            <li className='cursor-pointer hover:font-bold text-xl'>Login</li>
        </ul> */}

        <div className="relative">
          {session && <>
          <button onClick={()=> setShowdropdown(!showdropdown)} onBlur={()=>{setTimeout(() => {
            setShowdropdown(false)
          }, 100);
          }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-[#63e] hover:bg-[#63e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-[#63e] dark:hover:bg-[#63e] dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
              </button>
              <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[120px]  mt-2 bg-[#0f172a] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                  <ul className="py-2 text-sm text-gray dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <Link href="/dashboard" className="block px-4 py-2 hover:bg-black dark:hover:bg-gray-200 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="/yourpage" className="block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                    </li>
                    <li>
                    <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-black dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                    </li>
                  </ul>
              </div></>
}
          {session && <button  href="#"  className="bg-[#63e] px-4 py-2 mx-3 rounded-lg font-bold" onClick={() => { signOut() }}>Logout</button>}
          {!session &&  <Link href={'/login'}>
          <button  className="bg-[#63e] px-5 py-2 rounded-lg font-bold">Login</button></Link>}
        </div>
    </nav>
  )
}

export default Navbar

