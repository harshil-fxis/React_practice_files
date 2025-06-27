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
import FunctionClick from './components/FunctionClick'
import ClassClick  from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyle.css'
import styles from './components/appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComponent';
import ParentCompo from './components/ParentCompo';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value='Harshil'>
          <ComponentC />
        </UserProvider>
        {/* <User render={ (isLoggedIn) => isLoggedIn ? 'Harshil' : 'Guest'}/> */}
        {/* <ClickCounter name='Harshil'/>
        <HoverCounter /> */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman'/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Superman'/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Joker'/>
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FocusInput /> */}
        {/* <RefDemo /> */}
        {/* <ParentCompo /> */}
        {/* <Table /> */}
        {/* <FragmentDemo/> */}
        {/* <LifecycleA/> */}
        {/* <Form /> */}
        {/* <Stylesheet primary={true}/>
        <Inline/>
        <h1 className='error'>Error</h1>
        <h1 className= {styles.success}>Success</h1> */}
        {/* <ParentComponent/> */}
        {/* <NameList/> */}
        {/* <Counter />
        <Greet name="Harshil" surName="Vaja" />
        <Welcome name="jack" surName="John" />
        <FunctionClick />
        <ClassClick />
        <EventBind /> */}
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
