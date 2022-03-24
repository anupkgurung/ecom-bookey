import { createContext , useState,useContext } from "react";


const AuthenticationContext = createContext();

const AuthenticationProvider = ({children}) => {
    const [user, setUser] = useState();

    return (
        <AuthenticationContext.Provider value={{user, setUser}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

const useAuthentication = () => useContext(AuthenticationContext);

export { useAuthentication, AuthenticationProvider }

