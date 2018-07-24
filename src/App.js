import React, { Component } from 'react'

import Homepage from './components/Homepage.js'
import FadeTransitionRouter from './components/FadeTransitionRouter.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <FadeTransitionRouter>
    			<Homepage path='/' />
    			<Homepage path='/:projectId' />
        </FadeTransitionRouter>

      </div>
    )
  }
}

export default App
