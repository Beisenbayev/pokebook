import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './Home.module.css';

import { StoreInterface } from "../../redux/store";
import { getIsLoading, getPokemonsList } from "../../redux/selectors/home_selector";
import { getPokemonsListThunk, loadMorePokemonThunk } from "../../redux/actions/home_actions";

import Header from '../../components/Header/Header';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Button from '../../components/Button/Button';

interface Props { };

const Home: React.FC<Props> = (props): JSX.Element => {
   const dispatch = useDispatch();
   const [searchValue, setSearchValue] = useState<string>('');
   const isLoading = useSelector((store: StoreInterface) => getIsLoading(store.home));
   const pokemonsList = useSelector((store: StoreInterface) => getPokemonsList(store.home));

   useEffect(() => {
      dispatch(getPokemonsListThunk());
   }, []);

   const handleLoadMorePokemon = () => {
      dispatch(loadMorePokemonThunk());
   }
   console.log(pokemonsList)
   const pokemonItems: Array<JSX.Element> = pokemonsList ?
      pokemonsList
         .filter(item => item.name.includes(searchValue))
         .map((pokemon) => {
            return <PokemonCard key={pokemon.id}
               id={pokemon.id}
               index={pokemon.index}
               name={pokemon.name}
               imgSrc={pokemon.imageUrl} />
         }) : [];

   return (
      <div className={s.content}>
         <Header />
         <SearchPanel value={searchValue}
            handleChangeVlaue={setSearchValue} />
         <div className={s.items}>
            {pokemonItems}
         </div>
         <Button title={'load more'}
            handleOnClick={handleLoadMorePokemon}
            isDisabled={isLoading} />
      </div>
   );
}


export default Home;