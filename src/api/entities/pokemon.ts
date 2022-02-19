interface Pokemon {
   id: number,
   name: string,
   height: number,
   weight: number,
   abilities: Array<PokemonAbility>,
   types: Array<PokemonType>,
}

interface PokemonAbility {
   ability: PokemonAbilityItem,
   is_hidden: boolean,
   slot: number,
}

interface PokemonAbilityItem {
   name: string,
   url: string
}

interface PokemonType {
   slot: number,
   ability: PokemonTypeItem,
}

interface PokemonTypeItem {
   name: string,
   url: string
}


export default Pokemon;