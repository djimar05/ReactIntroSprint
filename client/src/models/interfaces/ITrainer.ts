import type { IPokemon } from "./IPokemon";

export interface ITrainer {
    _id?: string;           
    name?: string;
    age?: number;   
    pokemons: IPokemon[]; 
}