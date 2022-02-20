interface ApiConfigInterface {
   baseUrl: string,
   imageUrl: string,
   largeImageUrl: string
}

interface ApiEndpointsInterface {
   pokemonsList: string,
   pokemonById: (id: string) => string,
}

interface ApiUtilsInterface {
   getPokemonImageUrl: (pokemonId: string) => string,
   getPokemonLargeImageUrl: (pokemonId: string) => string,
}

export const apiConfig: ApiConfigInterface = {
   baseUrl: 'https://pokeapi.co/api/v2',
   imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail',
   largeImageUrl: '	https://assets.pokemon.com/assets/cms2/img/pokedex/full',
};

export const apiEndpoints: ApiEndpointsInterface = {
   pokemonsList: 'pokemon',
   pokemonById: (id: string) => `pokemon/${id}`,
}

export const apiUtils: ApiUtilsInterface = {
   getPokemonImageUrl: (pokemonId: string) => `${apiConfig.imageUrl}/${pokemonId}.png`,
   getPokemonLargeImageUrl: (pokemonId: string) => `${apiConfig.largeImageUrl}/${pokemonId}.png`,
};