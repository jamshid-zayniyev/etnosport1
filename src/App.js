import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'rgba(238, 243, 237, 0.857)'}}>
        <BrowserRouter>
        <Dashboard/>
        </BrowserRouter>

      </div>
    )
  }
}
