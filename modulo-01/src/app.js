'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div>
        <Title name='Carlos' lastName='Machel' />
      </div>
    )
  }
}

// App.defaultProps = {}

export default App
