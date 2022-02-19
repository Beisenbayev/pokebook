import React from "react";
import s from './SearchPanel.module.css';

import { Search } from 'react-feather';

interface Props {
   value: string,
   handleChangeVlaue: React.Dispatch<React.SetStateAction<string>>
};

const SearchPanel: React.FC<Props> = (props): JSX.Element => {
   return (
      <div className={s.content}>
         <Search size={24} />
         <input value={props.value}
            placeholder={'Search'}
            onChange={(e) => props.handleChangeVlaue(e.target.value)}
         />
      </div>
   );
}


export default SearchPanel;