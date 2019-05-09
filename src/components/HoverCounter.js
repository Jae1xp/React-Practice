import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {

  render() {
    // const { count } = this.state
    const { count, incrementCount } = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
      </div>
    )
  }
}

export default WithCounter(HoverCounter)
