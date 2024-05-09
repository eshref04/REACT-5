import React, { useEffect, useState } from 'react'
import {  RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import 'bootstrap/dist/css/bootstrap.css';
import MainContext from './context/Context';
import axios from 'axios';



function App() {
  const router= createBrowserRouter(Routes)
  const [data,setData] = useState([])
  
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")
  const contextData={
    data,setData,loading,setLoading,error,setError
  }

  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      setData([...res.data])
      setLoading(false)
    }).catch(error => {
      setError(error)
      setLoading(false)
    })
  },[])

 

  return (
    <>
 <MainContext.Provider value={contextData}>
 <RouterProvider router={router}/>
 </MainContext.Provider>

   
    </>
   
  )
}

export default App
