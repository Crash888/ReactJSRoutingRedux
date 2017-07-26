import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ( { currentUser } ) => (
	<div className="navbar">
		<NavLink
			className="link"
			to="/home"
			activeClassName="active">
				Home
		</NavLink>
		<NavLink
			className="link"
			to="/about"
			activeClassName="active">
				About
		</NavLink>
		{currentUser.loggedIn ?
			<NavLink
				to="/logout"
				className="link"
				activeClassName="active">
					Logout
			</NavLink> :
			<NavLink
				to="/login"
				className="link"
				activeClassName="active">
					Login
			</NavLink>
		}
	</div>
)

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser
	}
}

export default connect(
	mapStateToProps,
)(Navbar);

//export default Navbar;
