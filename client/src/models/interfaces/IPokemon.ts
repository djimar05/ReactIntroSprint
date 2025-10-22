import type { ITrainer } from "./ITrainer";
import type { IZone } from "./IZone";

export interface IPokemon {
  _id?: string;           
  imageUrl?: string;
  name?: string;
  number: number;    
  types?: string[];
  zones?: [IZone];
  trainer?: ITrainer;
}