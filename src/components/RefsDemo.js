import React, { Component } from 'react'

class RefsDemo extends Component {

  constructor(props) {
    super(props)
    // how to create a REF
    this.inputRef = React.createRef()
    // how to create Callback refs
    this.cbRef = null
    this.setCbRef = element => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    // console.log(this.inputRef);

    // Callback ref
    if (this.cbRef) {
      this.cbRef.focus()
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }
  
  render() { 
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
