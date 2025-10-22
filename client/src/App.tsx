import React from "react";
//import dotenv from 'dotenv';
//dotenv.config({path: "../../.env"});
//console.log('process.env : ');

import Pokedex from "./components/Pokedex";
import Pokedetails from "./components/Pokedetails";
import Trainex from "./components/Trainex";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"
import AddPokemonForm from "./components/AddPokemonForm";
const App: React.FC = () => {
 
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Pokedex />}/>
        <Route path="/pokemondetails/:number" element = {<Pokedetails />} />
        <Route path='/trainers' element={<Trainex />}/>
         <Route path='/addPokemon' element={<AddPokemonForm />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;