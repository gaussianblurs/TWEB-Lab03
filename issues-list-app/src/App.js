import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faExclamationCircle,
  faComments,
  faCheckCircle,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

library.add(faExclamationCircle, faComments, faCheckCircle, faHeart, faGithub)

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
