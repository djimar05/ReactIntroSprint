import React from "react";
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const AddPokemonForm: React.FC = () => {
    const navigate = useNavigate();

    const pokemonschema = z.object({
        name: z.string().min(4),
        imageUrl: z.string().url(),
        number: z.number().min(0),
        types: z.array(z.string())
    });

    type PokemonForm = z.infer<typeof pokemonschema>;

    const { register, handleSubmit, formState: { errors } } = useForm<PokemonForm>(
        {
            resolver: zodResolver(pokemonschema)
        }
    );

    const addPokemon = (data: PokemonForm) => {
        axios.post(`${import.meta.env.VITE_API_URL}pokemon/api/pokemon`, data).then((response) => {
            console.log(`${import.meta.env.VITE_API_URL}/pokemon/api/pokemon`)
            console.log(response);

            navigate("/");

        })
            .catch((err) => {
                console.log('Erreur', err)
            })
    };


    return <>
        <form onSubmit={handleSubmit(addPokemon)}>
            <div>
                <input type="text" {...register("name")} placeholder="name" />
                <input type="number" {...register("number", { valueAsNumber: true })}  placeholder="number" />
                <input type="text" {...register("imageUrl")} placeholder="imageUrl" />
            </div>
            <div>
                <select multiple {...register("types")}>
                    <option value="">type</option>
                    <option value="Ice">Ice</option>
                    <option value="Water">Water</option>
                    <option value="Earth">Earth</option>
                </select>
            </div>

            <input type="submit" />
        </form>
    </>

}

export default AddPokemonForm;