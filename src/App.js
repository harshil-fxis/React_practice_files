// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
// import React, { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/temp';
import Hello from './components/Hello';
import Message from './components/Message';
import Filter from './components/Filter';
import Counter from './components/Counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Greet name="Harshil" surName="Vaja" />
        <Welcome name="jack" surName="John" />
        {/* <Message />
        <Filter /> 
        <Greet name="Harshil" surName="Vaja" />
        <p>This is children props</p>
        <Greet name="jack" surName="John" />
        <button>Action</button>
        <Greet name="Nik" surName="Mark" />
        <Welcome name="Harshil" surName="Vaja" /> 
        <Welcome name="jack" surName="John" /> 
        <Welcome name="Nik" surName="Mark" />  */}
        
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
