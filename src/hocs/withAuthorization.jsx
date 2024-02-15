import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function withAuthorization(WrappedComponent) {
    return (props) => {
        const {user} = useContext(UserContext);

        if(!user) {
            return <Navigate to={"/login"} />
        }

        return <WrappedComponent {...props} />;
    }
}