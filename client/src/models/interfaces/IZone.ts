import type { IPokemon } from "./IPokemon";

export interface IZone {
    _id?: string;           
    name?: string;
    region?: number;
    pokemons?: [IPokemon] 
}