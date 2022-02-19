import {
   TOGGLE_IS_LOADING,
   SET_POKEMONS_LIST,
   ActionTypes
} from '../actions/home_actions';

export interface StateInterface {
   isLoading: boolean,
   currentOffset: number,
   itemsCount: number,
   totalCount: number | null,
   pokemonsList: Array<any>
};

const initState: StateInterface = {
   isLoading: false,
   currentOffset: 0,
   itemsCount: 40,
   totalCount: null,
   pokemonsList: [],
}

const homeReducer = (state: StateInterface = initState, action: ActionTypes): StateInterface => {
   switch (action.type) {
      case TOGGLE_IS_LOADING:
         return { ...state, isLoading: action.isLoading };
      case SET_POKEMONS_LIST:
         return { ...state, pokemonsList: action.payload };
      default:
         return state;
   }
}


export default homeReducer;