import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {

  render() {
    // const { count } = this.state
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
      </div>
    )
  }
}

export default WithCounter(ClickCounter, 5) // value of 5 being passed in as a parameter inside WithCounter component