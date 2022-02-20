interface Pokemon {
   id: number,
   name: string,
   height: number,
   weight: number,
   imageUrl: '',
   stats: Array<PokemonStat>,
   abilities: Array<PokemonAbility>,
   types: Array<PokemonType>,
}


interface PokemonStat {
   effort: number,
   base_stat: number,
   stat: PokemonStatItem
}

interface PokemonStatItem {
   name: string,
   url: string
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