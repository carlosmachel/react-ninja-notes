'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={e => alert('clicou')}>
        {['blue', 'red', 'green'].map(color => (
          <Square color={color} key={color} />
        ))}
      </div>
    )
  }
}

// App.defaultProps = {}

export default App
