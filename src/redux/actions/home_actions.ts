import { Dispatch } from 'redux';
import { StateInterface } from '../reducers/home_reducer';
import ApiService from '../../api/api_service';
import { PokemonsList } from '../../api/entities/pokemons_list';

//Action types
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
export const SET_POKEMONS_LIST = 'SET_POKEMONS_LIST';


//Action Interfaces
interface ToggleIsLoadingActionType {
   type: typeof TOGGLE_IS_LOADING,
   isLoading: boolean,
}

interface SetPokemonActionType {
   type: typeof SET_POKEMONS_LIST,
   payload: PokemonsList,
}

export type ActionTypes = ToggleIsLoadingActionType | SetPokemonActionType;


//Action Creators
export const toggleIsLoadingAC = (isLoading: boolean): ToggleIsLoadingActionType => {
   return {
      type: TOGGLE_IS_LOADING,
      isLoading
   }
}

export const setPokemonAC = (payload: PokemonsList): SetPokemonActionType => {
   return {
      type: SET_POKEMONS_LIST,
      payload
   }
}


//Thunk Creators
export const setPokemonThunk = () => {
   return async (dispatch: Dispatch<ActionTypes>, state: StateInterface) => {
      dispatch(toggleIsLoadingAC(true));
      try {
         const pokemonsList = await ApiService.getPokemonsList();
         dispatch(setPokemonAC(pokemonsList));
      } catch (error) {
         console.log(error);
      } finally {
         dispatch(toggleIsLoadingAC(false));
      }
   }
}