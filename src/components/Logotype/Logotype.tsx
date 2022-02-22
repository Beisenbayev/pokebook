import React from "react";
import { NavLink } from "react-router-dom";
import s from './Logotype.module.css';

import logoIcon from '../../assetes/logotype-icon.png';

interface Props { };

const Logotype: React.FC<Props> = (props): JSX.Element => {
   return (
      <NavLink to='/pokebook/home' className={s.content}>
         <div className={s.image}>
            <img src={logoIcon} className={s.img} alt='logo' />
         </div>
         <span className={s.text}>Pokebook</span>
      </NavLink>
   );
}


export default Logotype;