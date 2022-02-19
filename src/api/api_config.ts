interface ApiConfigInterface {
   baseUrl: String,
   imageUrl: String,
}

interface ApiEndpointsInterface {
   pokemonsList: String,
   pokemonById: (id: number) => String,
}

interface ApiUtilsInterface {
   getPokemonImageUrl: (pokemonId: number) => String,
}

export const apiConfig: ApiConfigInterface = {
   baseUrl: 'https://pokeapi.co/api/v2',
   imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail',
};

export const apiEndpoints: ApiEndpointsInterface = {
   pokemonsList: 'pokemon',
   pokemonById: (id: number) => `pokemon/${id}`,
}

export const ApiUtils: ApiUtilsInterface = {
   getPokemonImageUrl: (pokemonId: number) => `${apiConfig.imageUrl}/${pokemonId}.png`,
};