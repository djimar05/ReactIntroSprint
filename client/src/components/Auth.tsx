
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login, register} from '../features/authslice';

const Auth: React.FC = () => {
    const [ username, setUsername]  = useState("");
    const [ password, setPassword ] = useState("");
    const [signin, setSignin]= useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authSubmit = async(event) => {
        event.preventDefault();
      try{
          if(signin){
            console.log("Signin")
            await dispatch(login({ username, password }) ).unwrap();
            console.log("End signin > / ");
           
        }else{
            dispatch( register({ username, password }));

             console.log("SignUp")
           
        }
        navigate("/");
      }catch(err){

      }
    }

    return <>
        <form onSubmit ={authSubmit}>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit"> {signin ? "Signin" : "SignUp" } </button>
        </form>

        <button onClick={() => setSignin(!signin)}>{signin ? "Switch to SignUp" : "Switch to SignIn" }</button>
    </>
} ;


export default Auth;