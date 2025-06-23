import React from 'react'

function Person({person}) {
  return (
    <div>
      {person.map(person => <h3>My id is {person.id} and my name is {person.name}</h3>)}
    </div>
  )
}

export default Person
