'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Carlos'
    }
  }
  render () {
    return (
      <div
        className='container'
        onClick={() => this.setState({ text: 'outro texto' })}
      >
        {this.state.text}
      </div>
    )
  }
}

// App.defaultProps = {}

export default App
