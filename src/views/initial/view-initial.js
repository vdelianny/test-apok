import React, { Component } from 'react';
import './view-initial.css';
import Img from '../images/home-logo.png';

class ViewInitial extends Component {


/*Componente de la vista 1. Mostarmos el grid principal*/


  render() {

    return (
      <div className="view-initial">
      	<div className="row">
  			<div className="col-md-2 section blue-one-up"></div>
  			<div className="col-md-2 section blue-two-up"></div>
  			<div className="col-md-2 section blue-three-up"></div>
  			<div className="col-md-2 section orange-one-up"></div>
  			<div className="col-md-2 section orange-two-up"></div>
  			<div className="col-md-2 section blue-four-up"></div>
		</div>
		<div className="row">
  			<div className="col-md-2 section blue-one-medium"></div>
  			<div className="col-md-2 section orange-one-medium"></div>
  			<div className="col-md-4 section">
  				<div>
  					<img src={Img} className="img-logo" alt="logo"/>
  				</div>
  			</div>
  			<div className="col-md-2 section orange-two-medium"></div>
  			<div className="col-md-2 section blue-two-medium"></div>
		</div>
		<div className="row">
  			<div className="col-md-2 section blue-one-bottom"></div>
  			<div className="col-md-2 section orange-one-bottom"></div>
  			<div className="col-md-2 section orange-two-bottom"></div>
  			<div className="col-md-2 section blue-two-bottom"></div>
  			<div className="col-md-2 section blue-three-bottom"></div>
  			<div className="col-md-2 section blue-four-bottom"></div>
		</div>
    </div>
    );
  }
}

export default ViewInitial;
