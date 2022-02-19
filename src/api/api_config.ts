interface ApiConfigInterface {
   baseUrl: String,
   imageUrl: String,
}

interface ApiEndpointsInterface {
   pokemonsList: String,
   pokemonById: (id: number) => String,
}

export const apiConfig: ApiConfigInterface = {
   baseUrl: 'https://pokeapi.co/api/v2',
   imageUrl: 'https://pokeres.bastionbot.org/images/pokemon',
};

export const apiEndpoints: ApiEndpointsInterface = {
   pokemonsList: 'pokemon',
   pokemonById: (id: number) => `pokemon/${id}`,
}