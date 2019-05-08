import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Jae'
    }
    console.log('Lifecycle A constructor');
    
  }

  changeState = () => {
    this.setState({
      name: 'Sean'
    })
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle A getDerivedStateFromProps');
    return null
  }
  
  componentDidMount() {
    console.log('Lifecycle A componentDidMount');
    
  }

  shouldComponentUpdate() {
    console.log('Lifecycle A shouldComponentUpdate');
    return true    
  }

  getSnapshotBeforeUpdate() {
    console.log('Lifecycle A getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('Lifecycle A componentDidUpdate');
  }

  render() {
    console.log('Lifecycle A render');
    
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
