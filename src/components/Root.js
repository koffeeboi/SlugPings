import React, { Component } from 'react';
import '../styles/App.css';

import SidebarContainer from "../containers/SidebarContainer";
import LeafletMapContainer from "../containers/LeafletMapContainer";

class Root extends Component {
	render() {
		return (
			<div className="root">
				<SidebarContainer />
				<LeafletMapContainer />
			</div>
		);
	}
}

export default Root;
