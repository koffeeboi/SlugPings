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
		    <span class="close">&times;</span>
		    <p>TEST</p>
		  </div>

		</div>
      </div>
    );
  }
}



export default Root;
