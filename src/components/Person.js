import React from 'react'

function Person({person}) { // Passing in PERSON as a parameter from the nameList component as props
  // This component is responsible for rendering the person HTML
  return (
    <div>
      <h2>
        I am {person.name}, I am {person.age} years old, and I know {person.skill}
      </h2>
    </div>
  )
}

export default Person
