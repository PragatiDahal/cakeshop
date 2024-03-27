import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fullname, fullname');
    console.log('Email:', email);
    console.log('Password:', password);
    
  };
  
  return (
    <>
    <div className="px-5 py-5 md:px-2 md:py-2 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
      <div>
          <label htmlFor="fullname" className="block mb-1">FullName</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#733D26]"
            placeholder="Enter your FullName"
            required
          />
        </div>


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
          Sign Up
        </button>
        <div className=" flex justify-center items- center text-base font-poppins "> Already have an account ?
        <Link to="/Login">
        <span className="text-base text-[#733D26] px-2"> Login </span>
        </Link>
        </div>
      </form>
    </div>
    </>
  )
}

 

export default Register