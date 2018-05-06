'use strict'

import React from 'react'

const Title = props => <h1>Olá `${props.name} ${props.lastName}`</h1>

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}

/*
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
*/

export default Title
