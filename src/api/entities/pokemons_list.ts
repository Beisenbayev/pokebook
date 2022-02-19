interface PokemonsList {
   count: number,
   next: string,
   previous: string,
   results: Array<PokemonItem>,
}

interface PokemonItem {
   name: string,
   url: string
}


export default PokemonsList;