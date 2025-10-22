import type { ITrainer } from "./interfaces/ITrainer";
//import type { Pokemon } from "./Pokemon";
import type { IPokemon } from "./interfaces/IPokemon";

export class Trainer implements ITrainer {
    _id?: string;           
    name?: string;
    age?: number;  
    pokemons: IPokemon[] = [];

    constructor(trainer: ITrainer) {
        this._id = trainer._id;
        this.name = trainer.name;
        this.age= trainer.age;
    }
}