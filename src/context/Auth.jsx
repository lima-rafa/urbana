import React, {useState, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    const signin = (login, password) =>{
        if(login === "anderson" && password==="15984"){
            navigate("/home");
            setAuthenticated(true);
        }else if(login === "islane" && password==="14567"){
            navigate("/home");
            setAuthenticated(true);
        }else if(login === "otaviano" && password==="98561"){
            navigate("/home");
            setAuthenticated(true);
        }else if(login === "germano" && password==="25197"){
            navigate("/home");
            setAuthenticated(true);
        }

    }

    return(
        <AuthContext.Provider
            value={{ signin, login, password, setLogin, setPassword, authenticated  }}
        >
            { children }
        </AuthContext.Provider>
    );
}
