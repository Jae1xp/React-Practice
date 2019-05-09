import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (username) => { // parameter is provided by context. this is a function inside of an object
            return <div>Hello {username}</div>
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
