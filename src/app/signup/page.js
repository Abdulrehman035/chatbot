// import React from 'react';
// import Link from 'next/link';

// const Signup = () => {
//   return (
//     <div className="bg-gray-600 min-h-screen flex items-center justify-center"> 
//       <div className="container mx-auto">
//         <div className="card bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto">
//           <h5 className="card-title text-indigo-200 text-center mb-4 text-xl font-semibold">Sign Up</h5>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//               <input 
//                 type="text" 
//                 id="username" 
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
//                 placeholder="Enter username" 
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
//                 placeholder="Enter email" 
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input 
//                 type="tel" 
//                 id="phone" 
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
//                 placeholder="Enter phone number" 
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input 
//                 type="password" 
//                 id="password" 
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
//                 placeholder="Enter password" 
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//               <input 
//                 type="password" 
//                 id="confirm-password" 
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
//                 placeholder="Confirm password" 
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//               Sign Up
//             </button>
//           </form>
//           <p className="text-center mt-3">
//             Already have an account? <Link href="signin">Login</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;






// import React from 'react';
// import Link from 'next/link';

// const Signup = () => {
//   return (
//     <div className="bg-gray-600 min-h-screen flex items-center justify-center">
//       <div className="container mx-auto">
//         <div className="card bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto">
//           <h5 className="card-title text-indigo-200 text-center mb-4 text-xl font-semibold">Sign Up</h5>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 id="username"
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter name"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirm-password"
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Confirm password"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
//               <select
//                 id="gender"
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="" disabled selected hidden>
                  
//                 </option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//               Sign Up
//             </button>
//           </form>
//           <p className="text-center mt-3">
//             Already have an account? <Link href="signin">Login</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;







"use client";

import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup successful!");
  };

  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="card bg-white shadow-md rounded-lg p-8 w-full max-w-xl mx-auto">
          <h5 className="card-title text-indigo-200 text-center mb-6 text-2xl font-semibold">Sign Up</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex items-center">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 w-32">First Name:</label>
              <input
                type="text"
                id="first-name"
                className="p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 w-32">Last Name:</label>
              <input
                type="text"
                id="last-name"
                className="p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter last name"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 w-32">Email:</label>
              <input
                type="email"
                id="email"
                className="p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 w-32">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 w-32">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 w-32">Gender:</label>
              <select
                id="gender"
                className="p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="" disabled selected hidden></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link href="signin" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;






