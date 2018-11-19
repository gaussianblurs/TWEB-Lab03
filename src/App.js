import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </ApolloProvider>
)

export default App
