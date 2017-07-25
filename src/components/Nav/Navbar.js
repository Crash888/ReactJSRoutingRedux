import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
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
	</div>
)

export default Navbar;
