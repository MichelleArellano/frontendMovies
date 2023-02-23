import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import userStore from '../config/UserStore'
import '../styles/home2.css'
import '../styles/movieDetails.css'
import Navbar from '../components/Navbar'

function MovieDetail () {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const getMovieData = location.state.data
  console.log('current location', getMovieData)

  // Define the inner information fields
  const movieId = getMovieData.getMovieByTitle._id
  const movieTitle = getMovieData.getMovieByTitle.title
  const movieDescription = getMovieData.getMovieByTitle.description
  const movieLikes = getMovieData.getMovieByTitle.likes
  const movieImage = 'https://www.lahiguera.net/cinemania/pelicula/10179/el_gato_con_botas_el_ultimo_deseo-cartel-10596.jpg'
  const movieDate = getMovieData.getMovieByTitle.date
  // Define the inner information fields

  const getToken = userStore((state) => state.token)
  // Execute the query function before render
  useEffect(() => {
    console.log('get store', getToken)
    const isAuthenticated = getToken.token
    if (!isAuthenticated) return navigate('/')
  }, [])

  return (
    <>
      <Navbar />
      <div className='flex movie-detail-height items-center justify-center mx-auto background'>
        <Link to='' className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img className='object-cover rounded-t-lg md:h-full md:w-4/12 md:rounded-none md:rounded-l-lg' src={movieImage} alt='' />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{movieTitle}</h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{movieDescription}</p>
            <div className='flex items-center justify-center'>
              <svg aria-hidden='true' class='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Rating star</title><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /></svg>
              <p className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>{movieLikes}</p>
              <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400' />
              <Link to='' class='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'>{`Reviews ${movieLikes}`}</Link>
            </div>
          </div>
        </Link>
      </div>
    </>

  )
}

export default MovieDetail
