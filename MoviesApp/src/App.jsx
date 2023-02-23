import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Home, MovieDetail, NotFound } from './pages/index'

function App () {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })

  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/login' index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/movie_detail' element={<MovieDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ApolloProvider>
    </Router>
  )
}

export default App
