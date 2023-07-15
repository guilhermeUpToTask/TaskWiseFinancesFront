import { useContext } from "react";
import { AuthContext } from "../User/Authentication/context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
    const context = useContext(AuthContext);

    
    if (context?.loading === false) {
        return context?.session ? (
            <Outlet />
        ) : (
            <Navigate to={'/authentication'}/>
        );
    }
    return <></>
}
export default AuthRoute;