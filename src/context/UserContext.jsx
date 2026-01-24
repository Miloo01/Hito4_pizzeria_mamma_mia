import React from 'react'
import { createContext, useState } from 'react';

// 1 paso crear el contexto
export const UserContext = createContext()

//2 paso crear el provider
const UserProvider = ({ children }) => {
        //Estado inicial de token en true
    const [token, setToken] = useState(true); // Simulación de estado de autenticación

    // Método para cerrar sesión
    const logout = () => {
        setToken(false);
    };




  return (
    <UserContext.Provider value={{token, logout}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider