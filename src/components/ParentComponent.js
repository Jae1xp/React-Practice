import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      parentName: 'Parent'
    }
    // this is the reference you're passing to the Child Component
    this.greetParent = this.greetParent.bind(this)
  }
  
  // Parent method passed as props to the child
  // greetParent() {
  //   alert(`Hello ${this.state.parentName}`)
  // }

  // Child component being passed to the Parent via arrow function syntax as a PARAMETER
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
