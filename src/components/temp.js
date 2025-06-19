import React, { Component } from "react";

class Welcome extends Component{
    render(){
        const {name, surName} = this.props
        return <h1>Welcome {name} {surName}</h1>
    }
}

export default Welcome