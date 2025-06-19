import React from "react";


const Filter = () => {
    const name = "Harshil";
    const programmers = ['Harshil', 'John', 'Nick']
    const bio = {
        age: 22,
        isHindiSpeaker: true,
    };

    const user = {
        name: "Harshil",
        age: 22,
    }

    const moreUserInfo = {
        age: 22,
        country: "India",
    }
    
    const secondUser = {
        ...user,
        ...moreUserInfo,
        computer: "MacBook Pro",
    }

    console.log(secondUser); 

    return (
        <div>
            <h1>{name}</h1>
            <h2>I am {bio.age} years old</h2>
            <p>Speaks Hindi : {bio.isHindiSpeaker}</p>
            <ul>
                {programmers.map((programmer) => (
                    <li>{programmer}</li>
                ))}
            </ul>
            <ul>
                {programmers.filter((programmer) => programmer.startsWith("J")).map((programmer) => (
                    <li>{programmer}</li>
                ))}
            </ul>
            <p>name: {secondUser.name}, age: {secondUser.age},<br></br> country: {secondUser.country}, computer: {secondUser.computer}</p>
        </div>
    );
}


export default Filter