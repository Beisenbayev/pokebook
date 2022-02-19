import { PokemonsListItem } from "../../api/entities/pokemons_list"
import { StateInterface } from "../reducers/home_reducer"

export const getPokemonsList = (state: StateInterface): Array<PokemonsListItem> => {
   if (state.pokemonsList === null) return [];
   return state.pokemonsList;
}