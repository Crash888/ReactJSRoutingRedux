import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/currentUser';

const Navbar = ( { currentUser, login, logout } ) => (
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
				activeClassName="active"
				onClick={logout}>
					Logout
			</NavLink> :
			<NavLink
				to="/login"
				className="link"
				activeClassName="active"
				onClick={login}>
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

const mapDispatchToProps = (dispatch, ownProps) => {
	return { 
		logout: () => {
			dispatch(actions.logout())
		},
		login: (opts={}) => {
			dispatch(actions.login(opts))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);

