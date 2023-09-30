import { useContext } from "react";
import AuthProvider, { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const {user,loading} = useContext(AuthContext)
    console.log(user)
    if(loading){
        return <span>Loading................</span>
    }
    if (user) {

        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default ProtectedRoute;