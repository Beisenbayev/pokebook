import { PokemonsListItem } from "../../api/entities/pokemons_list"
import { StateInterface } from "../reducers/home_reducer"

export const getPokemonsList = (state: StateInterface): Array<PokemonsListItem> => {
   if (state.pokemonsList === null) return [];
   return state.pokemonsList;
}

export const getIsLoading = (state: StateInterface): boolean => {
   return state.isLoading;
}

export const getPokemonsCount = (state: StateInterface): number => {
   if (state.totalCount === null) return 0;
   return state.totalCount;
}