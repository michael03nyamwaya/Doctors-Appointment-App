import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., call API)
  };

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col items-start gap-3 m-auto p-8 min-w-[380px sm:min-w-96 rounded-xl border text-zinc-600 text-sm shadow-xl]'>
        <p className='text-2xl font-semibold'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p>Please {state === 'Sign Up' ? 'sign-up' : 'login'} to book an appointment</p>
        {
          state ==="Sign Up" &&
          <div className='w-full'>
          <p>Full Name</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="text"
            onChange={(e) => setName(e.target.value)} // Corrected here
            value={name}
            required
          />
        </div>
        }
       
        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="email" // Changed to email for better validation
            onChange={(e) => setEmail(e.target.value)} // Corrected here
            value={email}
            required
          />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="password" // Changed to password for security
            onChange={(e) => setPassword(e.target.value)} // Corrected here
            value={password}
            required
          />
        </div>
        <button className='bg-primary text-white w-full py-2 text-sm rounded-full'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        {state === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className='text-primary underline cursor-pointer'
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className='text-primary underline cursor-pointer'
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
