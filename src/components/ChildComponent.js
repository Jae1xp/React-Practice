import React from 'react'

// You must add props as a parameter in order to receive the method being passed AS PROPS
function ChildComponent(props) {
  return (
    <div>
      {/* Passing a method in the parent component to the child component via PROPS */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

      {/* Using arrow function syntax to pass props from the child to the parent. this is given the parameter of 'child'. The outcome is Hello Parent from Jae */}
      <button onClick={() => props.greetHandler('Jae')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
