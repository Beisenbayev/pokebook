import React, { useState } from "react";
import s from './Home.module.css';

import Header from '../../components/Header/Header';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import PokemonCard from './components/PokemonCard/PokemonCard';

import fakePokemons from './fakePokemonData';

interface Props { };

const Home: React.FC<Props> = (props): JSX.Element => {
   const [searchValue, setSearchValue] = useState<string>('');

   const pokemonItems: Array<JSX.Element> = fakePokemons.map(pokemon => {
      return <PokemonCard key={pokemon.id}
         id={pokemon.id}
         name={pokemon.name}
         imgSrc={pokemon.imgSrc} />
   });

   return (
      <div>
         <Header />
         <SearchPanel value={searchValue}
            handleChangeVlaue={setSearchValue} />
         <div className={s.items}>
            {pokemonItems}
         </div>
      </div>
   );
}


export default Home;