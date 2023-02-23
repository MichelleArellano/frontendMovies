/* import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Login, NotFound, Home } from '../pages/index'
import Navbar from '../components/Navbar'

const RoutesIndex = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Login />} />
          <Route path='/login' index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default RoutesIndex */
