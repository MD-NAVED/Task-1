"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'



const Nevbar = () => {

  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
 
  return ( 
    <>
   <nav className=" bg-blue-950 text-white flex py-6 px-32 justify-between">
    <div className='flex text-3xl gap-5 items-center'>
    <img className='rounded-full' src="giphy.webp"width={45} alt="" />
    GetmeAChai! 
    </div>

   <div>
   <Link href="/">
  <button className='"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80'>
    Home
  </button>
</Link>

{/* <Link href={"/about"}>
  <button className='"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80'>
    About
  </button>
</Link> */}


<Link href={"/login"} >

  <button className='"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80'>
    login
  </button>
  
</Link>
   </div>
   
</nav>
</>
  )
}

export default Nevbar