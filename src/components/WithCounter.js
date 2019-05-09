import React, { Component } from 'react';

// This is a HOC component. It is a function that accepts the original component and returns a new one
const WithCounter = (WrappedComponent, incrementNumber) => { // Parameter is the component being passed in. Typically named wrapped. Increment number is another parameter that we are incrementing by in the incrementCount method, and then passing in a value on the lower level components export default. See ClickCounter and HoverCounter components
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber }
      })
    }

    render() {
      return <WrappedComponent 
      count={this.state.count} 
      incrementCount={this.incrementCount} 
      {...this.props} /> // passes down the remaining props that have been specified (name prop in app.js)
    }
  }
  return WithCounter
}

export default WithCounter