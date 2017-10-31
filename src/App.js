import React, { Component } from 'react';
import './App.css';
import ViewDefault from './views/default/view-default';
import ViewInitial from './views/initial/view-initial';


class App extends Component {

  constructor(props) {
    super(props);
    this.moveMouse = this.moveMouse.bind(this);
    this.state = {isActive: false};
  }

  moveMouse() {
    this.setState({isActive: true});
  }

  
  render() { 

  	const isActive = this.state.isActive;
        
    return (
        <div className="view" onMouseOver={this.moveMouse}>
        	<Greeting isActive={isActive}/>
      	</div>
    );
  }
}

function UserGreeting(props) {
  return <ViewDefault />;
}

function GuestGreeting(props) {
  return <ViewInitial />;
}

function Greeting(props) {
  const isActive = props.isActive;
  if (isActive) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default App;
