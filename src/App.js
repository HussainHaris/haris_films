import React from 'react'

import { Navbar } from './components';

import { About, Header, Footer, Services } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default App
