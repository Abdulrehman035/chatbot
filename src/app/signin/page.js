// const SignIn = () =>{
//     return (
//         <div>
//             <h1>Sign In</h1>
//         </div>
//     )
// }

// export default SignIn


import React from 'react';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="card bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto">
          <h5 className="card-title text-center mb-4 text-xl text-indigo-200 font-semibold">Login</h5>
          <form method="POST" action="/api/auth/login">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
