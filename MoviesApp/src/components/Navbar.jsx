import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { GET_MOVIE_BY_ID } from '../services/Queries'
import imgLogo from '../assets/logo.png'

function Navbar () {
  const navigate = useNavigate()
  const location = useLocation()
  const [title, setTitle] = useState('')
  const [movieData, setMovieData] = useState('')
  const [getMovieById, { data, error }] = useLazyQuery(GET_MOVIE_BY_ID, {})

  if (data) {
    console.log('data', data)
    console.log('error', error)
    console.log('location', location)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
      {window.location.pathname === '/login'
        ? (
          <>
            <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
              <div className='container flex flex-wrap items-center justify-between mx-auto'>
                <Link to='https://www.netflix.com/mx/' className='flex items-center'>
                  <img
                    src={imgLogo}
                    className='h-6 mr-3 sm:h-9'
                    alt='Logo'
                  />
                </Link>
                <button
                  data-collapse-toggle='navbar-default'
                  type='button'
                  className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                  aria-controls='navbar-default'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='w-6 h-6'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
                  <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                    <li>
                      <button type='button' className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>SignUp</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>)
        : window.location.pathname === '/home'
          ? (
            <>
              <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
                <div className='container flex flex-wrap items-center justify-between mx-auto'>
                  <Link to='https://www.netflix.com/mx/' className='flex items-center'>
                    <img
                      src={imgLogo}
                      className='h-6 mr-3 sm:h-9'
                      alt='Logo'
                    />
                  </Link>
                  <button
                    data-collapse-toggle='navbar-default'
                    type='button'
                    className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                    aria-controls='navbar-default'
                    aria-expanded='false'
                  >
                    <span className='sr-only'>Open main menu</span>
                    <svg
                      className='w-6 h-6'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
                    <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                      <li>
                        <Link
                          to='/home'
                          className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                        >
                          Movies
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/addMovie'
                          className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                        >
                          New Movie
                        </Link>
                      </li>
                      <li>
                        <label
                          htmlFor='default-search'
                          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                        >
                          Search
                        </label>
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg
                              aria-hidden='true'
                              className='w-5 h-5 text-gray-500 dark:text-gray-400'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                              />
                            </svg>
                          </div>
                          <input
                            type='search'
                            id='default-search'
                            onChange={(event) => {
                              setTitle(event.target.value)
                            }}
                            onBlur={async (event) => {
                              console.log('onblur')
                              await getMovieById({ variables: { title } })
                                .then(function (response) {
                                  console.log('response-note', response)
                                  setMovieData(response.data)
                                })
                            }}
                            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          />
                          <Link
                            to='/movie_detail'
                            state={{ data: movieData }}
                            className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                          >
                            Search
                          </Link>
                        </div>
                      </li>
                      <li>
                        <button onClick={logout} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </>
            )
          : window.location.pathname.includes('/movie_detail')
            ? (
              <>
                <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2 rounded dark:bg-gray-900'>
                  <div className='container flex flex-wrap items-center justify-between mx-auto'>
                    <Link to='https://www.netflix.com/mx/' className='flex items-center'>
                      <img
                        src={imgLogo}
                        className='h-6 mr-3 sm:h-9'
                        alt='Logo'
                      />
                    </Link>
                    <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                      <li>
                        <button type='button' onClick={() => navigate(-1)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Back</button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </>
              )
            : (<></>)}
    </>
  )
}

export default Navbar
