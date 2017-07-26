import { 
	createStore, 
	bindActionCreators,
	combineReducers,
	applyMiddleware } from 'redux';
import * as currentTime from './modules/currentTime';
import * as currentUser from './modules/currentUser';

export const configureStore = () => {
	const reducer = combineReducers({
		currentTime: currentTime.reducer,
		currentUser: currentUser.reducer
	})

	const store = createStore(
		reducer, 
		{ currentTime: currentTime.initialState, 
		  currentUser: currentUser.initialState
		},
		applyMiddleware(apiMiddleware, loggingMiddleware)

	);

	const actions = {
		currentTime: 
			bindActionCreators(
				currentTime.actions,
				store.disatch),
		currentUser:
			bindActionCreators(
				currentUser.actions,
				store.dispatch)
	}

	return {store, actions};
}

const loggingMiddleware = (store) => (next) => (action) => {
	console.log(`Redux log:`, action)
	next(action);
}

const apiMiddleware = store => next => action => {
	if (!action.meta || action.meta.type !== 'api') {
		return next(action);
	}

	//  API request will go here
	const {url} = action.meta;
	const fetchOptions = Object.assign({}, action.meta);

	fetch(url, fetchOptions)
		.then(resp => resp.json())
		.then(json => {
			
			//  Respond back to user
			let newAction = Object.assign({}, action, {payload: json});
			delete newAction.meta;
			store.dispatch(newAction);
		})
}

export default configureStore;

