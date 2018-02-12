import React, { Component } from 'react';
import '../styles/App.css';

import LeafletMapContainer from "../containers/LeafletMapContainer";

class Root extends Component {
	render() {
		return (
			<div className="root">
				<LeafletMapContainer />
			</div>
		);
	}
}

export default Root;
