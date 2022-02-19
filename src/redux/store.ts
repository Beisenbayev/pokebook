import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './reducers/home_reducer';

const reducers = combineReducers({
   home: homeReducer
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;