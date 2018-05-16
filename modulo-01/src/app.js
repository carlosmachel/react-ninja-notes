'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'green',
      showTimer: true,
      time: 0
    }
  }
  render () {
    return (
      <div>
        <Timer time={this.state.time} />
        <button
          onClick={() => {
            this.setState({ time: this.state.time + 10 })
          }}
        >
          Change Props
        </button>
      </div>
    )
  }
}

// App.defaultProps = {}

export default App
