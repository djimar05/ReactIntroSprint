import type { IPokemon } from "./interfaces/IPokemon";
import type { ITrainer } from "./interfaces/ITrainer";
import type { IZone } from "./interfaces/IZone";

export class Pokemon implements IPokemon{
    _id?: string;           
    imageUrl?: string;
    name?: string;
    number: number;    
    types?: string[];
    zones?: [IZone];
    trainer?: ITrainer;

    constructor(pokemon: IPokemon){
        this._id = pokemon._id;
        this.name = pokemon.name;
        this.imageUrl = pokemon.imageUrl
        this.number = pokemon.number;
        this.types= pokemon.types;

        this.trainer = pokemon.trainer

    }
}