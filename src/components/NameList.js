import React from 'react'
import Person from './Person';

function NameList() {

  // const names = ['Bruce', 'Clark', 'Diana']
  // return (
  //   <div>
  //     {
  //       names.map(name => <h2>{name}</h2>)
  //     }
  //   </div>
  // )

  // 2nd way to do this
  // const nameList = names.map(name => <h2>{name}</h2>)
  // return (
  //   <div>
  //     {
  //       <div>{nameList}</div>
  //     }
  //   </div>
  // )

  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
  // This component is responsbile for rendering the list
  const personList = persons.map(person => <Person key={person.id} person={person} />) // Passing in the person as a prop person={person}. Also giving person a Key Value pair of the persons ID. 
  return <div>{personList}</div>
  

}

export default NameList
