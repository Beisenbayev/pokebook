export const actions = {
   SET_POKEMONS_LIST: 'SET_POKEMONS_LIST',
}

export type DefaultActionType = {
   type: string
}

export type SetPokemonActionType = {
   type: string,
   items: Array<number>,
}

export const setPokemonActionCreator = (items: Array<number>): SetPokemonActionType => {
   return {
      type: actions.SET_POKEMONS_LIST,
      items
   }
}