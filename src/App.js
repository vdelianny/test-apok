import React, { Component } from 'react';
import './App.css';
import ViewDefault from './views/default/view-default';
import ViewInitial from './views/initial/view-initial';

/*Componente principal. Se detecta si el mouse se ha movido y envía la vista <ViewDefault /> al iniciar se muestra <ViewInitial />;*/

class App extends Component {

  constructor(props) {
    super(props);
    this.moveMouse = this.moveMouse.bind(this);
    this.state = {
      isActive: false
    };
  }

/*Método encargado de cambiar el estado al movimiento del mouse*/
  moveMouse() {
    this.setState({isActive: true});
  }
  
  render() { 

    const isActive = this.state.isActive;

    return (
      <div className="view" onMouseOver={this.moveMouse}>
        <View isActive={isActive}/>
      </div>

    );
  }
}

function ContentView(props) {
  return <ViewDefault />;
}

function InitialView(props) {
  return <ViewInitial />;
}

function View(props) {
  const isActive = props.isActive;
  if (isActive) {
    return <ContentView />;
  }
  return <InitialView />;
}

export default App;
