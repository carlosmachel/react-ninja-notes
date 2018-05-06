'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: () => {
    return {
      name: 'Desconhecido',
      lastName: 'Sem sobrenome'
    }
  },
  render: function () {
    return <h1>{this.props.name + ' ' + this.props.lastName}</h1>
  }
})

export default Title
