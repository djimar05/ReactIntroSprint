import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Pokemon } from "../models/Pokemon";
import "../index.css";
import { useParams, useNavigate } from "react-router-dom";
import { Zone } from "../models/Zone";


const Pokedetails: React.FC = () => {
  const pokeNumber = useParams();
  const navigate = useNavigate();

  console.log(`pokeNumber : ${JSON.stringify(pokeNumber)}`);

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      console.log("props.pokemonNumber:");
      try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}pokemon/api/pokemon/${pokeNumber.number}`);
        console.log(response.data);
        setPokemon(response.data);

      }catch(err){
        console.log('Erreur',err);
      }finally{
        console.log(`props.pokemonNumber: finally`);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <>
       <div className="pokemon-detail">
        <button onClick={() => {navigate("/")}}>Back to pokemon list</button>
          <div>
            <h1>{pokemon?.name}</h1>
            <img className="" src={pokemon?.imageUrl} alt={pokemon?.name} />
            <div className="trainer">
                <h2>Trainer</h2>
                <p> Name: {pokemon?.trainer?.name}</p>
                <p> Age : {pokemon?.trainer?.age}</p>
            </div>
            <div className="types">
              <p>Types : {pokemon?.types?.join(' , ')}</p>
            </div>

            
            <div className="zones">
              <h2>Zones</h2>
                {pokemon?.zones?.map((zone, index) => (
                 <ul>
                  <li  key={index} className="zone-item">
                    <p>Nom : {zone?.name}</p>
                    <span>Région : {zone?.region}</span>
                  </li>
                 </ul>
                ))}
            </div>
            <p>#{pokemon?.number}</p>
            
          </div>

      </div>
    </>
  );
};

export default Pokedetails;
