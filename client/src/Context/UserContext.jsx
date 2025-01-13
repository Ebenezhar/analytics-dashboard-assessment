import { createContext, useState } from "react";


let UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [dataset, setDataSet] = useState([]);
    
    
    return (
        <UserContext.Provider value={{ dataset, setDataSet }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;