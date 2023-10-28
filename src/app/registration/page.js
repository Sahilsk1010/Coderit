"use client";

import Image from 'next/image';
import axios from "axios";

import { useState } from 'react';
import { useRouter } from 'next/navigation'

 

export default function Home() {
  const router=useRouter();

  const [student,setStudent]=useState({name:"",usn:"",branch:"",email:""});

  const handleChange=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setStudent({...student,[name]:value});
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();

    console.log(student)
    
    if(!student.name || !student.usn || !student.branch || !student.email){
      alert("Enter all fields");
      console.log("EMPYT")
      return 
    }

    try{
      const res=await axios.post('/api/register',student);
      console.log(res);

      if(res.status!=200){
        alert("Your response could not be stored")
        return;
      }
      else{
        setStudent({name:"",usn:"",branch:"",email:""});
        alert("Thank You for registration");
        router.push('/')
      }
    }
    catch(error){
      alert("Server Error")
      console.log(error)
    }
    
  }

  return (
    <>
      <div className="mt-[100px] bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-black text-center">Ice Breaker</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input onChange={handleChange} value={student.name} autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name " />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                </div>
                <div className="relative">
                  <input onChange={handleChange} value={student.usn} autocomplete="off" id="usn" name="usn" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="USN" />
                  <label htmlFor="usn" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">USN</label>
                </div>
                <div className="relative">
                  <input onChange={handleChange} value={student.branch} autocomplete="off" id="branch" name="branch" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Branch" />
                  <label htmlFor="branch" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Branch</label>
                </div>
                <div className="relative">
                  <input onChange={handleChange} value={student.email} autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                </div>
                
 
                <div className=" text-center " onClick={handleSubmit}>
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
