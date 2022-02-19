export interface PokemonsList {
   count: number,
   next: string,
   previous: string,
   results: Array<PokemonsListItem>,
}

export interface PokemonsListItem {
   id: number,
   imageUrl: string,
   name: string,
   index: string
}