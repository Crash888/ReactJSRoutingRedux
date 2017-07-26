import { createStore, bindActionCreators, combineReducers } from 'redux';
import * as currentTime from './modules/currentTime';
import * as currentUser from './modules/currentUser';

export const configureStore = () => {
	const reducer = combineReducers({
		currentTime: currentTime.reducer,
		currentUser: currentUser.reducer
	})

console.log ("I am here");

	const store = createStore(reducer, { currentTime: currentTime.initialState, currentUser: currentUser.initialState});
	//const store = createStore(currentTime.reducer);
	
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

export default configureStore;


/*
mport { createStore, combineReducers } from 'redux';

import { rootReducer, initialState } from './reducers'
import { reducer, initialState as userInitialState } from './currentUser'

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      time: rootReducer,
      user: reducer
    }), // root reducer
    {
      time: initialState, 
      user: userInitialState
    }, // our initialState
  );

  return store;
}

*/