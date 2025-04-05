import React, { createContext ,useContext ,useState } from 'react'
import Cookies from 'js-cookie'
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const initialState = Cookies.get("jwt") || localStorage.getItem("ChatApp");

    // parse the user data and storing in state.
    const [authUser, setAuthUser] = useState(initialState ? JSON.parse(initialState) : undefined);
  return (
    <div>
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
      
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
