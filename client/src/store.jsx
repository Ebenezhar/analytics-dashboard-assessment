import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Optional, for debugging
import { thunk } from 'redux-thunk';
import rootReducer from './reducers'; // Combine all your reducers here

// Create the store with middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;