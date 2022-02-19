import React from "react";
import s from './Header.module.css';

import Logotype from "../Logotype/Logotype";

interface Props { };

const Hedaer: React.FC<Props> = (props): JSX.Element => {
   return (
      <div className={s.content}>
         <Logotype />
      </div>
   );
}


export default Hedaer;