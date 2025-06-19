import React from "react";

// function Greet(){
//     return <h1>Hello Harshil</h1>
// }

// const Greet = (props) => {
//     return <div>
//         <h1>
//             Hello {props.name} {props.surName}
//         </h1>
//         {props.children}
//     </div>
// }

// const Greet = ({name, surName}) => {
//     return <div>
//         <h1>
//             Hello {name} {surName}
//         </h1>
//     </div>
// }

const Greet = (props) => {
    const {name, surName} = props
    return <div>
        <h1>
            Hello {name} {surName}
        </h1>
    </div>
}

export default Greet