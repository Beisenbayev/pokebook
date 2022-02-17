import React from 'react';
import s from './App.module.css';

import Router from '../router/router';

interface Props { }

const App: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={s.content}>
      <Router />
    </div>
  );
}


export default App;
