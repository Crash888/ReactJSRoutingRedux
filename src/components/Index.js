import React from 'react';
import Navbar from '../components/Nav/Navbar';
import { connect } from 'react-redux';


export class Index extends React.Component {
	render() {
		return (
			<div className="app">
				<Navbar />
				<div className="page">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default connect(state => ({
	currentUser: state.currentUser
}))(Index);


