import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './Home.module.css';

import { StoreInterface } from "../../redux/store";
import { getPokemonsList } from "../../redux/selectors/home_selector";

import Header from '../../components/Header/Header';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { setPokemonThunk } from "../../redux/actions/home_actions";

interface Props { };

const Home: React.FC<Props> = (props): JSX.Element => {
   const dispatch = useDispatch();
   const [searchValue, setSearchValue] = useState<string>('');
   const pokemonsList = useSelector((store: StoreInterface) => getPokemonsList(store.home));

   useEffect(() => {
      dispatch(setPokemonThunk());
   }, [])

   const pokemonItems: Array<JSX.Element> = pokemonsList.map((pokemon, index) => {
      return <PokemonCard key={index}
         id={index}
         name={pokemon.name}
         imgSrc={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'} />
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