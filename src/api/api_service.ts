import axios from "axios";
import { apiConfig, apiEndpoints } from "./api_config";

interface ApiServiceInterface {
   getPokemonsList: (limit: number) => Promise<any>,
   getPokemonById: (id: number) => Promise<any>,
   getPokemonsListByUrl: (url: string) => Promise<any>,
   getPokemonByUrl: (url: string) => Promise<any>,
}

const ApiService: ApiServiceInterface = {
   getPokemonsList: async (limit: number): Promise<any> => {
      const response = await axios.get(`${apiConfig.baseUrl}/${apiEndpoints.pokemonsList}?limit=${limit}`);
      return response.data;
   },

   getPokemonsListByUrl: async (url: string): Promise<any> => {
      const response = await axios.get(url);
      return response.data;
   },

   getPokemonById: async (id: number): Promise<any> => {
      const response = await axios.get(`${apiConfig.baseUrl}/${apiEndpoints.pokemonById(id)}`);
      return response.data;
   },

   getPokemonByUrl: async (url: string): Promise<any> => {
      const response = await axios.get(url);
      return response.data;
   },
};


export default ApiService;