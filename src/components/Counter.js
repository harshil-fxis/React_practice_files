import React,{ Component } from "react";

class Counter extends Component{
    constructor(pops){
        super(pops)

        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState({
            count: this.state.count + 5
        },
        () => {
            console.log('callback value', this.state.count)
        }
    ) 
        console.log(this.state.count)
    }

    render(){
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>InCrement</button>
            </div>
        )
    }
}

export default Counter