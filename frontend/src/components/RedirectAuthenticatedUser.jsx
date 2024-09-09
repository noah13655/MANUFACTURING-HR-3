import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

const RedirectAuthenticatedUser = ({ children }) => {
    const { isAuthenticated } = useAuthStore();


    if (isAuthenticated) {
        return <Navigate to='/dashboard' replace />;
    }

    return children; 
};

export default RedirectAuthenticatedUser;
