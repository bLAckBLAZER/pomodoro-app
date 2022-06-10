import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers";
import { getDefaultAuthState } from "./getDefaultAuthState";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(getDefaultAuthState());

const AuthProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(
    authReducer,
    getDefaultAuthState()
  );

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
