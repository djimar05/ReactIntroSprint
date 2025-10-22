import type { Reponse, Signin, Signup,  } from "../Types";



import axios from 'axios';
// `${import.meta.env.VITE_API_URL ?? 
const API_BASE_URL ="http://localhost:3000/";

class ApiProvider{
    async signup(data: Signup) :Promise<Reponse> {
        try{
            const response = await axios.post(`${API_BASE_URL}user/api/register`, data);
            console.log('response signup', response);
            return this.signin(data);

        }catch(err){
            console.log("Erreur", err)
            // rethrow so the caller can handle the error
            throw err;
        }
    }

     async signin(data: Signin): Promise<Reponse>{
        try{
            const response = await axios.post(`${API_BASE_URL}user/api/login`, data);
            console.log("response.data > signin ", response.data)
            return {
                "token": response.data.token,
                "user":{
                    "_id": response.data.user._id,
                    "username": response.data.user.username
                }
            };
        }catch(err){
            // rethrow so the caller can handle the error
            console.log("Erreur", err)
            throw err;
        }
    }
}



export const apiProvider = new ApiProvider();