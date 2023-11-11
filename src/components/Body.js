import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { AddUser, RemoveUser } from '../utils/userSlice'

const Body = () => {

  const dispacth=useDispatch()

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login />
        },
        {
            path:'/browse',
            element:<Browse />
        }
    ])

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayname,photoURL} = user;
        dispacth(AddUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL}))
       
      } else {
        dispacth(RemoveUser())
      }
    });

  },[])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
