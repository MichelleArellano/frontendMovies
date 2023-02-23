import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import userStore from '../config/UserStore'

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
    <div className='flex flex-wrap gap-5'>
      <>
        <div>
          <Link
            data-id={movieId}
            to='/movie_detail'
            state={{ _id: movieId, title: movieTitle, description: movieDescription, likes: movieLikes, date: movieDate }}
            className=' w-1/4 h-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          >
            <Link to='#'>
              <img
                className='rounded-t-lg w-4/5 pt-6 pr-5 py-6 pl-6 ml-12'
                src={movieImage}
                alt=''
              />
            </Link>
            <div className='p-5'>
              <div className='w-72'>
                <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {movieTitle}
                </h3>
              </div>

              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {movieDescription}
              </p>
            </div>
          </Link>
        </div>
      </>
    </div>
  )
}

export default MovieDetail
