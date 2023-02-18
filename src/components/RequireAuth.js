import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function RequireAuth({ children }) {
  const authenticated = useAuth();

  return authenticated ? children : <Navigate to="/login" replace />;
}
