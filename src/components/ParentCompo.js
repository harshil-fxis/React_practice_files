import React, { Component } from 'react'
import RegCompo from './RegCompo'
import PureComp from './PureComponent'
import MemoComp from './MemoComp'

class ParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Harshil'
      }
    }
    componentDidCatch() {
        setInterval(() => {
            this.setState({
                name: 'Harshil'
            })
        },2000)
    }
    
  render() {
    console.log('******************************Parent Compo******************************')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegCompo name ={this.state.name} />
        <PureComp name ={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentCompo
