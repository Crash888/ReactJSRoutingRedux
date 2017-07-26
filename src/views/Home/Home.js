import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/currentTime';
/*
const Home = (props) => {
	return (
		<div className="content">
			<h1>Welcome Home!</h1>
			<p>The time is {props.currentTime.toString()}</p>
		</div>
	);
}
*/

const Home = ( { currentTime, onClick } ) => {
	return (
		<div>
			<p>Current Time: {currentTime.currentTime.toString()}</p>
			<button onClick={onClick}>
				Update
			</button>
		</div>
	);
}

/*
const Home = ({ actions, currentTime}) => {
	return (
		<div>
			<p>Current Time: {currentTime.toString()}</p>
			<button onClick={actions.currentTime.updateTime}>
				Update
			</button>
		</div>
	)
}
*/

const mapStateToProps = (state) => {
	return {
		currentTime: state.currentTime
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return { 
		onClick: (opts={}) => {
			dispatch(actions.updateTime(opts))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

