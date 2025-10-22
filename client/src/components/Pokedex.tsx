

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pokemon } from '../models/Pokemon';


import "../index.css";

import { useNavigate } from 'react-router-dom';



const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {


    const fetchPokemons = async () => {
      try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}pokemon/api/pokemon`, {
          
        });

        console.log(response.data);
        setPokemons(response.data);

      }catch(err){
        setError("Erreur lors du chargement des données");
      }finally{
        setLoading(false);
      }
    }

    fetchPokemons();
  }, []);


  if (loading) return <p>Chargement en cours...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;


  return (
    <>
      <div>
        <button onClick={() => navigate(`trainers`)}>Voir les dresseurs</button>
        <button onClick={() => navigate(`/addPokemon`)}>Ajouter Pokemon</button>
        <h2>Liste des Pokémons</h2>
        <ul className="pokemon-list">
          {pokemons.map((pokemon, index) => (
            <li key={index} className='pokemon-list-item'> 
              <img className="poke-img" src={pokemon.imageUrl} alt={pokemon.name} />
              <h1 onClick={() => navigate(`pokemondetails/${pokemon.number}`)}>{pokemon.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pokedex;
