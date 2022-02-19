import React from "react";
import { useParams } from 'react-router-dom';

interface Porps { };
type ParamsType = {
   pokeId: string;
};

const PokemonInfo: React.FC<Porps> = (props): JSX.Element => {
   const { pokeId } = useParams<ParamsType>();

   return (
      <div>Pokemon Info {pokeId}</div>
   );
}


export default PokemonInfo;