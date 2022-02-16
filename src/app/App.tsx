import React from 'react';
import './App.css';

import Router from '../router/router';

interface Props { }

const App: React.FC<Props> = (props): JSX.Element => {
  return (
    <Router />
  );
}


export default App;
