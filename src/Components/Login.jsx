import React from 'react'
import { useState } from 'react'

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
      </form>
    </div>
    </>
  )
}

export default Login