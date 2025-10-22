import React from "react";

import Pokedex from "./components/Pokedex";
import Pokedetails from "./components/Pokedetails";
import Trainex from "./components/Trainex";
import Auth from "./components/Auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"
import AddPokemonForm from "./components/AddPokemonForm";

import PrivateRoute from './components/Private';

import { Provider } from "react-redux";
import {store} from "./app/store"

const App: React.FC = () => {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />}/>
          <Route path="/pokemondetails/:number" element = {<Pokedetails />} />
          <Route path='/trainers' element={<Trainex />}/>
          <Route path='/addPokemon' element={<PrivateRoute> <AddPokemonForm /> </PrivateRoute>}/>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
   


  );
};

export default App;