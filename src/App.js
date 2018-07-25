import React, { Component } from 'react'
import { Router } from "@reach/router"
import Homepage from './components/Homepage.js'
import './App.css'
import './Responsive.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Homepage path='/' />
          <Homepage path='/:projectId' />
        </Router>
      </div>
    )
  }
}

export default App
