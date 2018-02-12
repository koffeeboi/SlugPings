import React, { Component } from 'react';
import '../styles/App.css';

import SidebarContainer from "../containers/SidebarContainer";
import ListingsContainer from "../containers/ListingsContainer";
import LeafletMapContainer from "../containers/LeafletMapContainer";

class Root extends Component {
	render() {
		return (
			<div className="root">
				<SidebarContainer />
				<ListingsContainer />
				<LeafletMapContainer />
			</div>
		);
	}
}

export default Root;
