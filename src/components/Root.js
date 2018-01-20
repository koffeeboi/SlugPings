import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

import GoogleMapContainer from "../containers/GoogleMapContainer";

class Root extends Component {
  state = {
    response: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('https://fierce-hamlet-12953.herokuapp.com/api/hello', {mode: 'cors'});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="root">
        <GoogleMapContainer />
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default Root;
