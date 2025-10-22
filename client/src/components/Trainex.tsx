import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


import { Trainer } from "../models/Trainer";

const Trainex: React.FC = () => {
    const [trainers, setTrainers] = useState<Trainer[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    

    useEffect(() => {
        const fetchTrainers = async () => {
            try{
                const response = await axios.get(`${import.meta.env.VITE_API_URL}trainer/api/trainers`);
                console.log(response.data);
                setTrainers(response.data)
            }catch(err){
                console.log("erreur", err)
                setError("Erreur lors du chargement des données");
            }finally{
                setLoading(false);
            }
        }

        fetchTrainers();
    }, []);

    if (loading) return <p>Chargement en cours...</p>;

    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return <>
        <div>
             <button onClick={() => navigate(`/`)}>Retour aux Pokemons</button>
            <h2>Liste des trainers</h2>
            <ul className="trainer-list">
                {trainers.map((trainer, index) =>(
                    <li key={index}>
                        <div>
                            <h1>{trainer?.name}</h1>
                            <span>{trainer?.age} ans</span>
                             <hr />
                             <h2>Pokemons</h2>
                             {
                               trainer.pokemons.map((pokemon, index) => (
                                    <p>{pokemon.name}</p>
                               ))
                             }
                        </div>
                       
                    </li>

                ))}
            </ul>
        </div>
    </>
};


export default Trainex;