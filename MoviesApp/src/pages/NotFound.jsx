import React from 'react'
import '../styles/notFound.css'

const NotFound = () => {
  return (
    <>
      <div className='img-404-background-container d-flex justify-content-center align-items-center'>
        <img className='img-404-background' src='../src/assets/img/404error.jpg' alt='404notfound' />
      </div>
      <div className='float-button'>
        <button
          onClick={() => {

          }}
          className='button-mark'
          target='_blank'
        >
          <span className='material-icons-outlined'>home</span>
        </button>
      </div>
    </>
  )
}

export default NotFound
