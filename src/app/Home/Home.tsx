import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from './Home.module.css';

import { StoreInterface } from "../../redux/store";
import { getIsLoading, getPokemonsList, getPokemonsCount } from "../../redux/selectors/home_selector";
import { getPokemonsListThunk, loadMorePokemonThunk } from "../../redux/actions/home_actions";

import Loading from "../Loading/Loading";
import Header from '../../components/Header/Header';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Button from '../../components/Button/Button';

interface Props { };

const Home: React.FC<Props> = (props): JSX.Element => {
   const dispatch = useDispatch();
   const navigator = useNavigate();
   const [searchValue, setSearchValue] = useState<string>('');
   const isLoading = useSelector((store: StoreInterface) => getIsLoading(store.home));
   const pokemonsList = useSelector((store: StoreInterface) => getPokemonsList(store.home));
   const pokemonsCount = useSelector((store: StoreInterface) => getPokemonsCount(store.home));

   useEffect(() => {
      dispatch(getPokemonsListThunk());
   }, []);

   const handleLoadMorePokemon = () => {
      dispatch(loadMorePokemonThunk());
   }

   const handleShowRandomPokemon = () => {
      const randomId: number = Math.floor(Math.random() * pokemonsCount);
      navigator(`/pokemon/${randomId}`);
   }

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

   if (isLoading) return <Loading />

   return (
      <div className={s.content}>
         <Header />
         <div className={s.headerPanels}>
            <SearchPanel value={searchValue}
               handleChangeVlaue={setSearchValue} />
            <Button title={"my pokemon"}
               handleOnClick={handleShowRandomPokemon} />
         </div>
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