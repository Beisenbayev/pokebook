import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import s from './PokemonInfo.module.css';

import { StoreInterface } from "../../redux/store";
import { getPokemonDataThunk } from "../../redux/actions/pokemon_action";
import { getPokemonDataSelector } from "../../redux/selectors/pokemon_selector";

import Hedaer from "../../components/Header/Header";
import Utils from "../../core/utils/utils";

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
   }, [pokeId]);

   const pokemonTypes = pokemonData?.types.map((item, index) => {
      return (
         <div key={index} className={s.typeInfo}>
            {item?.type.name}
         </div>
      );
   })

   return (
      <div className={s.content}>
         <Hedaer />
         <div className={s.title}>
            <h2>{pokemonData?.name.toLocaleUpperCase()}</h2>
            <p>#{Utils.createIndexById(pokemonData?.id!)}</p>
         </div>
         <div className={s.bodyContent}>
            <div className={s.image}>
               <img src={pokemonData?.imageUrl} alt='pokemon' />
            </div>
            <div className={s.infoSection}>
               <div className={s.typesSection}>
                  {pokemonTypes}
               </div>
               <div className={s.abilitiesSection}>
                  <div className={s.abilityInfo}>
                     <h4>Height:</h4>
                     <p>{pokemonData?.height! / 10} m</p>
                  </div>
                  <div className={s.abilityInfo}>
                     <h4>Weight:</h4>
                     <p>{pokemonData?.weight! / 10} kg</p>
                  </div>
                  <div className={s.abilityInfo}>
                     <h4>Abilities:</h4>
                     <p>{pokemonData?.abilities.map(item => item.ability.name).join(', ')}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


export default PokemonInfo;