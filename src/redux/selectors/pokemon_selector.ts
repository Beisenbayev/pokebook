import Pokemon from "../../api/entities/pokemon";
import { StateInterface } from "../reducers/pokemon_reducer";

export const getPokemonDataSelector = (state: StateInterface): Pokemon | null => {
   return state.data;
}

export const getIsLoading = (state: StateInterface): boolean => {
   return state.isLoading;
}