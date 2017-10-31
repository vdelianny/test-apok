import React, { Component } from 'react';
import './view-default.css';
import axios from 'axios';
import  {Modal } from 'react-bootstrap';
import Img from '../images/home-logo.png';

class ViewDefault extends Component {

/*Componente de la vista 2. En las props se encuentran todos los items de la vista y también obtenemos el código de la response.
En caso de haber error, mostramos el modal de mensaje*/

constructor(props) {
    super(props)
    this.state = { 
      us: '',
      services: '',
      blog: '',
      portfolio: '',
      contact: '',
      status: 0,
      showModal: true
    }
  }

  /*Método que se ejecuta antes de crear el componente, encargado de conectar con la API*/


  componentWillMount() {
   var self = this;

      axios.get('http://test.reclutamiento.grupoapok.com/')
      .then(function (response) {
        self.setState({status: response.data.status.code})
        console.log(response.data.status.code)
        if(self.state.status !== 404){
          self.setState({ showModal: false });
          console.log("el estatus es" + self.state.status)
        }
        self.setState({us: response.data.data.menu.us.title})
        self.setState({services: response.data.data.menu.services.title})
        self.setState({blog: response.data.data.menu.blog.title})
        self.setState({portfolio: response.data.data.menu.portfolio.title})
        self.setState({contact: response.data.data.menu.contact.title})
      }) 
  }

 
  render() {

    return (
      <div className="view-default">
        <div>
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Servicio no disponible</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Lo sentimos</h4>
                <p>En este momento nuestro servicio no está disponible.</p>
                <hr />
            </Modal.Body>
          </Modal>
        </div>

      	<div className="row">
  			<div className="col-md-2 section blue-up-one"></div>
  			<div className="col-md-2 section blue-up-two">
  				<div className="text-item"><p>{this.state.us}</p></div>
  			</div>
  			<div className="col-md-2 section blue-up-three"></div>
  			<div className="col-md-2 section orange-up-one">
  				<div className="text-item"><p>{this.state.services}</p></div>
  			</div>
  			<div className="col-md-2 section orange-up-two"></div>
  			<div className="col-md-2 section blue-up-four"></div>
		</div>
		<div className="row">
  			<div className="col-md-2 section blue-medium-one"></div>
  			<div className="col-md-2 section orange-medium-one"></div>
  			<div className="col-md-4 section">
  				<img src={Img} className="img-logo" alt="logo"/>
  			</div>
  			<div className="col-md-2 section orange-medium-two">
  				<div className="text-item"><p>{this.state.blog}</p></div>
  			</div>
  			<div className="col-md-2 section blue-medium-two"></div>
		</div>
		<div className="row">
  			<div className="col-md-2 section blue-bottom-one"></div>
  			<div className="col-md-2 section orange-bottom-one"></div>
  			<div className="col-md-2 section orange-bottom-two">
  				<div className="text-item"><p>{this.state.portfolio}</p></div>
  			</div>
  			<div className="col-md-2 section blue-bottom-two"></div>
  			<div className="col-md-2 section blue-bottom-three">
  				<div className="text-item"><p>{this.state.contact}</p></div>
  			</div>
  			<div className="col-md-2 section blue-bottom-four"></div>
		</div>
    </div>
    );
  }
}

export default ViewDefault;
