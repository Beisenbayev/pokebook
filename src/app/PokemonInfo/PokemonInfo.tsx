import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import s from './PokemonInfo.module.css';

import { StoreInterface } from "../../redux/store";
import { getPokemonDataThunk } from "../../redux/actions/pokemon_action";
import { getPokemonDataSelector } from "../../redux/selectors/pokemon_selector";

interface Porps { };
type ParamsType = {
   pokeId: string;
};

const PokemonInfo: React.FC<Porps> = (props): JSX.Element => {
   const dispatch = useDispatch();
   const { pokeId } = useParams<ParamsType>();
   const pokemonData = useSelector((store: StoreInterface) => getPokemonDataSelector(store.pokemon));

   useEffect(() => {
      dispatch(getPokemonDataThunk(pokeId!));
   }, [])

   return (
      <div>Pokemon Info {pokeId}</div>
   );
}


export default PokemonInfo;