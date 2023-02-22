import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import RoutesIndex from './routes/RoutesIndex'

function App () {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
  return (
    <>
      <ApolloProvider client={client}>
        <h1 className='text-3xl font-bold underline'>
          Hello world!
        </h1>
        <RoutesIndex />
      </ApolloProvider>
    </>
  )
}

export default App
