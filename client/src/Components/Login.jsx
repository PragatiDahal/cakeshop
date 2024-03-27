import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  // let isloading = true;
  // let API="https://hn.algolia.com/api/v1/search?query=json ";

  // const fetchApiData = async (url) => {
  //   try {
  //     const res =  await fetch(url);
  //     const data =  await res.json();
  //     console.log(data);
  //     // isloading = false;
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  // useEffect(() =>{
  //   fetchApiData(API)
  // }
  // );
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email , password})
    .then(result => {
      console.log(result)
      if(result.data === "Success") {
        navigate('/Homepage')
      }
    })
  };
  
  return (
    <>
    <div className="px-5 py-5 md:px-2 md:py-2 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Login to your account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#733D26]"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#733D26]"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#733D26] text-white py-2 rounded-md hover:bg-[#412417] focus:outline-none">
          Login
        </button>
        <div className=" flex justify-center items- center text-base font-poppins px-15"> Don't have an account ?
        <Link to="/Register">
        <span className="text-base text-[#733D26] px-2"> Register</span>
        </Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login