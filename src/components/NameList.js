import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Harshil', 'John', 'Nick']
    const persons = [
        {
            id: 1,
            name: 'Harshil',
            email: 'harshil@getDefaultNormalizer.com',
        },
        {
            id: 2,
            name: 'Jack',
            email: 'jack@getDefaultNormalizer.com',
        },{
            id: 3,
            name: 'Nick',
            email: 'nick@getDefaultNormalizer.com',
        }
    ]
    const personList = persons.map(person => <h3>My id is {person.id} and my name is {person.name}</h3>)
    return (
        <div>
            {names.map(name => <h4>{name}</h4>)}
            {personList}
        </div>
    )
}

export default NameList
