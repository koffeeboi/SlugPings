import React, { Component } from 'react';
import '../styles/App.css';

import SidebarContainer from "../containers/SidebarContainer";
import ListingsContainer from "../containers/ListingsContainer";
import ChatContainer from "../containers/ChatContainer";
import LeafletMapContainer from "../containers/LeafletMapContainer";

class Root extends Component {
	render() {
		return (
			<div className="root">
				<SidebarContainer />
				<ListingsContainer />
				<ChatContainer />
				<LeafletMapContainer />
			</div>
		);
	}
}

export default Root;
