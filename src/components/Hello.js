import React from "react";

const Hello = () => {

    //jsx use

    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Harshil</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null ,'Hello Harshil') 
    )
}

export default Hello