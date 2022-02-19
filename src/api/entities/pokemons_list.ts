export interface PokemonsList {
   count: number,
   next: string,
   previous: string,
   results: Array<PokemonsListItem>,
}

export interface PokemonsListItem {
   name: string,
   url: string
}