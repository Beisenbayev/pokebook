import React from "react";
import { useRoutes } from "react-router-dom";

import Home from '../app/Home/Home';
import PokemonInfo from '../app/PokemonInfo/PokemonInfo';
import Error from '../app/Error/Error';

interface RouteInterface {
   path: string,
   element: JSX.Element,
   children?: Array<RouteInterface>
}

const routeConfig: Array<RouteInterface> = [
   { path: '/', element: <Home /> },
   { path: '/home', element: <Home /> },
   { path: '/pokemon/:pokeId', element: <PokemonInfo /> },
   { path: '*', element: <Error /> },
];

interface Props { };

const Router: React.FC<Props> = (props) => {
   const routes = useRoutes(routeConfig);

   return (
      <>{routes}</>
   );
}


export default Router;