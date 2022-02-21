import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './reducers/home_reducer';
import pokemonReducer from './reducers/pokemon_reducer';

export type StoreInterface = ReturnType<typeof reducers>

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
   home: homeReducer,
   pokemon: pokemonReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default store;