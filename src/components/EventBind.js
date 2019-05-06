import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      message: 'Hello!'
    }

    // This binding inside of the constructor is the most common way to bind, and is the official documentation
    this.changeMessage = this.changeMessage.bind(this) 
  }

  changeMessage() {
    this.setState({
      message: 'Goodbye!'
    }, () => {
      console.log(this.state.message)
    })
  }

  // Arrow function as a class property way of binding the event handler. (changing the way you define methods in the class. Currently experimental, but will probably be the best approach when more consistent)
  // changeMessage = () => {
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  // }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* This is the bind function approach. Probably not optimal */}
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}

        {/* This is the arrow function approach. Viable and easy option */}
        {/* <button onClick={() => this.changeMessage()}>Click</button> */}

        {/* Binding Event in the CONSTRUCTOR as opposed in the RENDER method. SEE ABOVE IN CONSTRUCTOR. This is the most IDEAL way */}
        <button onClick={this.changeMessage}>Click</button>
      </div>
    )
  }
}

export default EventBind