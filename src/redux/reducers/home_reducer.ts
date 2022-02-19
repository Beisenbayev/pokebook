import {
   actions,
   DefaultActionType, SetPokemonActionType
} from '../actions/home_actions';

interface StateInterface {
   pokemonsList: Array<number>
};

type ActionTypes = SetPokemonActionType & DefaultActionType;

const initState: StateInterface = {
   pokemonsList: [],
}

const homeReducer = (state: StateInterface = initState, action: ActionTypes): StateInterface => {
   switch (action.type) {
      case actions.SET_POKEMONS_LIST:
         return { ...state, pokemonsList: action.items };
      default:
         return state;
   }
}


export default homeReducer;