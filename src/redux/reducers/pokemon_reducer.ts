import Pokemon from "../../api/entities/pokemon";
import {
   TOGGLE_IS_LOADING,
   SET_POKEMON_DATA,
   ActionTypes
} from '../actions/pokemon_action';

export interface StateInterface {
   isLoading: boolean,
   data: Pokemon | null,
};

const initState: StateInterface = {
   isLoading: false,
   data: null,
};

const pokemonReducer = (state: StateInterface = initState, action: ActionTypes): StateInterface => {
   switch (action.type) {
      case TOGGLE_IS_LOADING:
         return { ...state, isLoading: action.isLoading };
      case SET_POKEMON_DATA:
         return { ...state, data: action.payload };
      default:
         return state;
   }
}


export default pokemonReducer;