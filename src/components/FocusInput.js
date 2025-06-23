import React, { Component } from 'react'
import input from './input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.ComponentRef = React.createRef()
    }
    
    clickHander = () => {
        this.ComponentRef.current.focus()
    }

  render() {
    return (
      <div>
        <input ref={this.ComponentRef} />
        <button onClick={this.clickHander}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
