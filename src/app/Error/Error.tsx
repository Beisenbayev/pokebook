import React from "react";
import { useNavigate } from "react-router-dom";
import s from './Error.module.css';

import pokemonIcon from '../../assetes/pokemon-icon.png';
import Button from "../../components/Button/Button";

interface Props { };

const Error: React.FC<Props> = (props): JSX.Element => {
   const navigator = useNavigate();

   const handleGoToHomePage = () => {
      navigator('/pokebook/home');
   }

   return (
      <div className={s.content}>
         <div>
            <div className={s.logo}>
               <img src={pokemonIcon} />
            </div>
            <p className={s.text}>
               Oops!!!
            </p>
            <Button title={'go to home'}
               handleOnClick={handleGoToHomePage} />
         </div>
      </div>
   );
}


export default Error;