import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import userStore from '../config/UserStore'
import '../styles/home2.css'
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

        <Link to='#' className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img className='object-cover w-full rounded-t-lg md:h-full md:w-auto md:rounded-none md:rounded-l-lg' src={movieImage} alt='' />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{movieTitle}</h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{movieDescription}</p>
          </div>
        </Link>

      </div>

    </>

  )
}

export default MovieDetail
