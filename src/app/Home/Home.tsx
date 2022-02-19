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
   }, []);

   const pokemonItems: Array<JSX.Element> = pokemonsList.map((pokemon) => {
      return <PokemonCard key={pokemon.id}
         id={pokemon.id}
         name={pokemon.name}
         imgSrc={pokemon.imageUrl} />
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