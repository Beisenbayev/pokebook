import React from "react";
import { NavLink } from "react-router-dom";
import s from './PokemonCard.module.css';

interface Props {
   id: number,
   imgSrc: string,
   name: string,
   index: string,
   color?: string
};

const PokemonCard: React.FC<Props> = (props): JSX.Element => {
   return (
      <NavLink to={`/pokemon/${props.id}`} className={s.content}>
         <div className={s.topContent}>
            <span className={s.number}>#{props.index}</span>
            <div className={s.image}>
               <img src={props.imgSrc} alt='pokemon' />
            </div>
         </div>
         <div className={s.bottomContent}>
            <p className={s.title}>{props.name}</p>
         </div>
      </NavLink>
   );
}


export default PokemonCard;