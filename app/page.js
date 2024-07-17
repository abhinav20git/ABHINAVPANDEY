"use client";
import {useAuth} from '@/context/AuthContext'
import {React,useEffect,useState} from 'react'

const HomePage = () => {
  const {user} = useAuth()


  if(!user){
    return <div>loading...</div>
  }
const [book,setBook]=useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        const response= await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        setBook(data)
      }
      
      fetchData();
     
    },[])
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8 items-center ">
    <div className='flex justify-center items-center'><h1 className='text-4xl font-bold'>PRODUCTS</h1></div>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {book.map((book) => (
          <div key={book.id}  className="group relative border bg-gray-200 rounded-lg cursor-pointer">
            <div className=' m-2'>
            <span  className="h-full w-full"><img src={book.image} className="m-auto  h-48 w-full rounded-lg "/></span>
            <h3 className="text-sm text-gray-700">{book.title}</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-1">{book.description}</p>
            <p className="mt-1 text-sm text-gray-500">{book.rating.rate}</p>
            
          </div>
          </div>
         
        ))}

    </div>
     </div>
  )
}

export default HomePage