import { Box, Button, TextField } from "@mui/material";
import { useContext} from "react";
import { AuthContext } from "../context/Auth";
import gravata from '../assets/gravata.png';


export default function Login() {
    const {signin, login, password, setLogin, setPassword} = useContext(AuthContext);

    const handleSubmit = (event) => {
        signin(login, password);
    }

    return(
        <Box
      component="form"
      sx={{
        margin: 'auto',
        mt: 10,
        textAlign: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <img
          src={gravata}
          alt="logo"
          width='268'
        />
      </div>
      <div>
        <TextField
            label="Login"
            id="outlined-size-small"
            size="small"
            value={login}
            onChange={(event)=>setLogin(event.target.value)}
        />
      </div>
      <div>
        <TextField
            label="Senha"
            type="password"
            id="outlined-size-small"
            size="small"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
        />
      </div>
      <div>
        <Button
            variant="contained"
            size="small"
            onClick={handleSubmit}
            sx={{
                width: 215
            }}
        >
                Entrar
        </Button>
      </div>
    </Box>
  );
}
