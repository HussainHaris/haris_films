import React from 'react'

import { Navbar } from './components';
import { About, Header, Footer, Services } from './containers';
import './app.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <div className="wrapper">
        <Navbar />
        <Header />
        <About />
        <Services />
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
