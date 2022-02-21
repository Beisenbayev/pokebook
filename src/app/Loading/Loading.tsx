import React from "react";
import s from './Loading.module.css';

import pokemonIcon from '../../assetes/pokemon-icon.png';

interface Props { };

const Loading: React.FC<Props> = (props): JSX.Element => {
   return (
      <div className={s.content}>
         <div className={s.logo}>
            <img src={pokemonIcon} />
         </div>
      </div>
   );
}


export default Loading;
