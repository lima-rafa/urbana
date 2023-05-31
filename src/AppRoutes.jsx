import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Login from "./signin/Login"
import Info from "./info-terreno/Info";
import { AuthContext, AuthProvider } from "./context/Auth";
import { useContext } from "react";


const AppRoutes = () => {
    const Private = ({children}) =>{
        const {authenticated} = useContext(AuthContext);

        if(!authenticated){
            return <Navigate to="/login" />
        }

        return children;
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Login />
                        }
                    />

                        <Route
                            exact
                            path="/home"
                            element={
                                <Private>

                                        <Info />

                                </Private>
                            }
                        />


                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;
