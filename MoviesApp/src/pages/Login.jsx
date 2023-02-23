import React, { useState } from 'react'
import { LOGIN } from '../services/Queries'
import { useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import userStore from '../config/UserStore'
import '../styles/login.css'
import Navbar from '../components/Navbar'

function Login () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isInvalid, setInvalid] = useState('')
  const addToken = userStore((state) => state.addToken)
  const getAuthorization = userStore((state) => state.token)
  console.log(getAuthorization)

  const [login, { data, error }] = useLazyQuery(LOGIN, {
    variables: { email, password }
  })

  if (data) {
    console.log('data', data)
    console.log('error', error)
  }

  return (
    <>
      <Navbar />
      <div className='login drop-shadow-2xl flex justify-center items-center'>
        <form
          onSubmit={async (event) => {
            event.preventDefault()
            // Execute the login query
            await login().then(function (response) {
              console.log('response', response)
              const data = response.data.login

              if (data === 'Ok User') {
                // valid if the user exist  and redirect to the /home page
                addToken({ token: true })
                navigate('/home')
              } else {
                // Set invalid user label
                setInvalid('Invalid Credentials!!!')
              }
            })
          }}
          className='container w-4/12 grid bg-slate-500 py-20 px-5'
        >
          <div className='mb-6'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email</label>
            <input
              type='email'
              id='email'
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@flowbite.com' required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your password</label>
            <input
              type='password'
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required
            />
          </div>

          <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Login</button>
          <div className='mb-6'>
            <p className='text-sm text-red-600 mt-5'>
              {isInvalid}
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
