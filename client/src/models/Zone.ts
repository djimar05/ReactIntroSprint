import type { IZone } from "./interfaces/IZone";
import type { IPokemon} from "./interfaces/IPokemon";


export class Zone implements IZone{
     _id?: string;           
    name?: string;
    region?: number;
    pokemons?: [IPokemon] 
    
    constructor(zone: IZone){
        this._id = zone._id;
        this.name = zone.name;
        this.region = zone.region;
        this.pokemons= zone.pokemons;
    }
}