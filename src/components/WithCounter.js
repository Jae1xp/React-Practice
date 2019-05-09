import React, { Component } from 'react';

// This is a HOC component. It is a function that accepts the original component and returns a new one
const WithCounter = (WrappedComponent) => { // Parameter is the component being passed in. Typically named wrapped
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      })
    }

    render() {
      return <WrappedComponent 
      count={this.state.count} 
      incrementCount={this.incrementCount} />
    }
  }
  return WithCounter
}

export default WithCounter