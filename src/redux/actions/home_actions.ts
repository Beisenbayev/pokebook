import { Dispatch } from 'redux';
import { StateInterface } from '../reducers/home_reducer';
import apiService from '../../api/api_service';
import { PokemonsList } from '../../api/entities/pokemons_list';
import { apiUtils } from '../../api/api_config';
import Utils from '../../utils/utils';

//Action types
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
export const SET_POKEMONS_LIST = 'SET_POKEMONS_LIST';
export const LOAD_MORE_POKEMONS = 'LOAD_MORE_POKEMONS';


//Action Interfaces
interface ToggleIsLoadingActionType {
   type: typeof TOGGLE_IS_LOADING,
   isLoading: boolean,
}

interface SetPokemonActionType {
   type: typeof SET_POKEMONS_LIST,
   payload: PokemonsList,
}

interface LoadMorePokemonsActionType {
   type: typeof LOAD_MORE_POKEMONS,
   payload: PokemonsList,
}

export type ActionTypes = ToggleIsLoadingActionType | SetPokemonActionType
   | LoadMorePokemonsActionType;


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

export const loadMorePokemonsAC = (payload: PokemonsList): LoadMorePokemonsActionType => {
   return {
      type: LOAD_MORE_POKEMONS,
      payload
   }
}


//Thunk Creators
export const getPokemonsListThunk = () => {
   return async (dispatch: Dispatch<ActionTypes>, getState: any) => {
      dispatch(toggleIsLoadingAC(true));
      try {
         const state = getState();
         const pokemonsList = await apiService.getPokemonsList(state.home.itemsLimit);
         const pokemonsDataList = await pokemonsList.results.map(async (item: any) => {
            const pokemon = await apiService.getPokemonByUrl(item.url);
            pokemon.index = Utils.createIndexById(pokemon.id);
            pokemon.imageUrl = apiUtils.getPokemonImageUrl(pokemon.index);
            return pokemon;
         });
         const pokemonsResponse = await Promise.allSettled(pokemonsDataList);
         const pokemons = pokemonsResponse.map((item: any) => item.value);
         dispatch(setPokemonAC({ ...pokemonsList, results: pokemons }));
      } catch (error) {
         console.log(error);
      } finally {
         dispatch(toggleIsLoadingAC(false));
      }
   }
}

export const loadMorePokemonThunk = () => {
   return async (dispatch: Dispatch<ActionTypes>, getState: any) => {
      dispatch(toggleIsLoadingAC(true));
      try {
         const state = getState();
         const pokemonsList = await apiService.getPokemonsListByUrl(state.home.nextItemsUrl);
         const pokemonsDataList = await pokemonsList.results.map(async (item: any) => {
            const pokemon = await apiService.getPokemonByUrl(item.url);
            pokemon.index = Utils.createIndexById(pokemon.id);
            pokemon.imageUrl = apiUtils.getPokemonImageUrl(pokemon.index);
            return pokemon;
         });
         const pokemonsResponse = await Promise.allSettled(pokemonsDataList);
         const pokemons = pokemonsResponse.map((item: any) => item.value);
         dispatch(loadMorePokemonsAC({ ...pokemonsList, results: pokemons }));
      } catch (error) {
         console.log(error);
      } finally {
         dispatch(toggleIsLoadingAC(false));
      }
   }
}