import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import './modal.css';
import './modal.js';

import GoogleMapContainer from "../containers/GoogleMapContainer";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <GoogleMapContainer />
        {/*<button id="open-form" onClick={()=>{console.log('oop')}}>open form</button>
        //Trigger/Open The Modal */}

		<button id="myBtn">Open Modal</button>
		
		{/*The Modal*/}
		<div id="myModal" class="modal">

		  {/*Modal content*/}
		  <div class="modal-content">
			  <div class="modal-header">
			    <span class="close">&times;</span>
			    <h2>Event Name</h2>
			  </div>
			  <div class="modal-body">
			  <input type="text" class="form-control"  id="addHousemate" placeholder="Housemate's Name">
			    <p>TEST</p>
			  </div>
			  <div class="modal-footer">
			    <h3>Public or Private</h3>
			  </div>
			</div>
		</div>
      </div>
    );
  }
}



export default Root;
