import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/currentTime';

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

