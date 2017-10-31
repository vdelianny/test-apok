import React, { Component } from 'react';
import './view-default.css';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import Img from '../images/home-logo.png';

class ViewDefault extends Component {

  constructor(props) {
    super(props)
    this.state = { elements: [] }
  }

  componentWillMount() {
    var us
    var services
    var blog
    var portfolio
    var contact
    axios.get('http://test.reclutamiento.grupoapok.com/')
    .then(function (response) {
       console.log(response.data.data.menu.us.title);
       this.us = response.data.data.menu.us.title
       this.services = response.data.data.menu.services.title
       this.blog = response.data.data.menu.blog.title
       this.portfolio = response.data.data.menu.portfolio.title
       this.contact = response.data.data.menu.contact.title
       console.log(this.us)
     })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {


    return (
      <div className="view-default">
      	<div className="row">
  			<div className="col-md-2 section blue-up-one"></div>
  			<div className="col-md-2 section blue-up-two">
  				<div className="text-item"><p>{this.us}</p></div>
  			</div>
  			<div className="col-md-2 section blue-up-three"></div>
  			<div className="col-md-2 section orange-up-one">
  				<div className="text-item"><p>{this.services}</p></div>
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
  				<div className="text-item"><p>{this.blog}</p></div>
  			</div>
  			<div className="col-md-2 section blue-medium-two"></div>
		</div>
		<div className="row">
  			<div className="col-md-2 section blue-bottom-one"></div>
  			<div className="col-md-2 section orange-bottom-one"></div>
  			<div className="col-md-2 section orange-bottom-two">
  				<div className="text-item"><p>{this.portfolio}</p></div>
  			</div>
  			<div className="col-md-2 section blue-bottom-two"></div>
  			<div className="col-md-2 section blue-bottom-three">
  				<div className="text-item"><p>{this.contact}</p></div>
  			</div>
  			<div className="col-md-2 section blue-bottom-four"></div>
		</div>
    </div>
    );
  }
}

export default ViewDefault;
