import { Dispatch } from "react";
import { apiUtils } from "../../api/api_config";
import apiService from "../../api/api_service";
import Pokemon from "../../api/entities/pokemon";
import Utils from "../../utils/utils";

//Action types
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
export const SET_POKEMON_DATA = 'SET_POKEMON_DATA';


//Action Interfaces
interface ToggleIsLoadingActionType {
   type: typeof TOGGLE_IS_LOADING,
   isLoading: boolean,
}

interface SetPokemonDataActionType {
   type: typeof SET_POKEMON_DATA,
   payload: Pokemon,
}

export type ActionTypes = ToggleIsLoadingActionType | SetPokemonDataActionType;


//Action Creators
const toggleIsLoadingAC = (isLoading: boolean): ToggleIsLoadingActionType => {
   return {
      type: TOGGLE_IS_LOADING,
      isLoading,
   };
}

const setPokemonDataAC = (payload: Pokemon): SetPokemonDataActionType => {
   return {
      type: SET_POKEMON_DATA,
      payload,
   };
}


//Thunk Creators
export const getPokemonDataThunk = (pokemonId: number) => {
   return async (dispatch: Dispatch<ActionTypes>) => {
      dispatch(toggleIsLoadingAC(true));
      try {
         const pokemonData = await apiService.getPokemonById(pokemonId);
         pokemonData.index = Utils.createIndexById(pokemonData.id);
         pokemonData.imageUrl = apiUtils.getPokemonImageUrl(pokemonData.index);
         dispatch(setPokemonDataAC(pokemonData));
      } catch (error) {
         console.log(error);
      } finally {
         dispatch(toggleIsLoadingAC(false));
      }
   }
}