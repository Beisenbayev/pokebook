import { Dispatch } from 'redux';
import { StateInterface } from '../reducers/home_reducer';
import ApiService from '../../api/api_service';
import { PokemonsList, PokemonsListItem } from '../../api/entities/pokemons_list';

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
         const pokemonsDataList = await pokemonsList.results.map(async (item: any) => {
            const pokemon = await ApiService.getPokemonByUrl(item.url);
            pokemon.imageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';
            return pokemon;
         });
         console.log(pokemonsDataList.length)
         dispatch(setPokemonAC({ ...pokemonsList, results: pokemonsDataList }));
      } catch (error) {
         console.log(error);
      } finally {
         dispatch(toggleIsLoadingAC(false));
      }
   }
}