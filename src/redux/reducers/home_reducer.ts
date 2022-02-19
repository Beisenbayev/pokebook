import { PokemonsListItem } from '../../api/entities/pokemons_list';
import {
   TOGGLE_IS_LOADING,
   SET_POKEMONS_LIST,
   ActionTypes
} from '../actions/home_actions';

export interface StateInterface {
   isLoading: boolean,
   nextItemsUrl: string,
   previousItemsUrl: string,
   itemsLimit: number,
   totalCount: number | null,
   pokemonsList: Array<PokemonsListItem> | null,
};

const initState: StateInterface = {
   isLoading: false,
   nextItemsUrl: '',
   previousItemsUrl: '',
   pokemonsList: null,
   itemsLimit: 21,
   totalCount: null,
};

const homeReducer = (state: StateInterface = initState, action: ActionTypes): StateInterface => {
   switch (action.type) {
      case TOGGLE_IS_LOADING:
         return { ...state, isLoading: action.isLoading };
      case SET_POKEMONS_LIST:
         return {
            ...state,
            pokemonsList: action.payload.results,
            totalCount: action.payload.count,
            previousItemsUrl: action.payload.previous,
            nextItemsUrl: action.payload.next
         };
      default:
         return state;
   }
}


export default homeReducer;