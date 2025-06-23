import React, { Component } from 'react'

export class Form extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        username: '',
        command: '',
        topic: 'react'
     }
   }

   handleUsernameChange = (event) => {
    this.setState({
       username: event.target.value
    })
   }

   handleUsercommandChange = (event) => {
    this.setState({
       command: event.target.value
    })
   }

   handleUserTopicChange = (event) => {
    this.setState({
        topic: event.target.value
    })
   }

   handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.command} ${this.state.topic}`)
    event.preventDefault()
}
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName : </label>
            <input type='text' value={this.state.username} 
                onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Command : </label>
            <input type='text' value={this.state.command} 
                onChange={this.handleUsercommandChange}/>
        </div>
        <div>
            <label>
                <select value={this.state.topic} onChange={this.handleUserTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </label>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
