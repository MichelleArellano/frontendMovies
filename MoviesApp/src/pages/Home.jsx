import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_MOVIES } from '../services/Queries'
import { Link, useNavigate } from 'react-router-dom'
import userStore from '../config/UserStore'
import Navbar from '../components/Navbar'
import '../styles/home2.css'

function Home () {
  const navigate = useNavigate()
  const getToken = userStore((state) => state.token)
  // Execute the query function before render
  useEffect(() => {
    console.log('get store', getToken)
    const isAuthenticated = getToken.token
    if (!isAuthenticated) return navigate('/')
    getMovies()
  }, [])

  // Call the get notes query from the backend API
  const [getMovies, { data, error }] = useLazyQuery(GET_MOVIES)

  if (data) {
    console.log(data)
    console.log(error)
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-wrap background justify-around'>
        {data && data.getMovies.map(({ _id, title, description, likes, image, date }) => (
          <div key={_id} className='px-2 h-full'>

            <Link
              data-id={_id}
              to='#'
              state={{ _id, title, description, likes, image, date }}
              className=' w-1/4 h-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
            >
              <div className='max-w-xs w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Link to='#'>
                  <img className='rounded-t-lg max-h-max pt-6 pr-6 py-6 pl-6' src={image} alt='' />
                </Link>
                <div className='p-5 max-h-56 min-h-max'>
                  <Link to='#'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
                  </Link>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 split-text'>{description}</p>
                  <Link to='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Read more
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 ml-2 -mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                    </svg>
                  </Link>
                </div>
              </div>

            </Link>

          </div>
        ))}ss
      </div>
    </>

  )
}

export default Home
