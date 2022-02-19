import React from "react";
import { useRoutes } from "react-router-dom";

import Home from '../app/Home/Home';
import PokemonInfo from '../app/PokemonInfo/PokemonInfo';

interface RouteInterface {
   path: string,
   element: JSX.Element,
   children?: Array<RouteInterface>
}

const routeConfig: Array<RouteInterface> = [
   { path: '/', element: <Home /> },
   { path: '/home', element: <Home /> },
   { path: '*', element: <div></div> },
   {
      path: '/pokemon',
      element: <PokemonInfo />,
      children: [
         { path: ':pokeId', element: <PokemonInfo /> }
      ]
   }
];

interface Props { };

const Router: React.FC<Props> = (props) => {
   const routes = useRoutes(routeConfig);

   return (
      <>{routes}</>
   );
}


export default Router;