import React from 'react'
import { createContext, useState } from 'react';

// 1 paso crear el contexto
export const UserContext = createContext()

//2 paso crear el provider
const UserProvider = ({ children }) => {
        //Estado inicial de token en true
    const [token, setToken] = useState(true); // Simulación de estado de autenticación
    
    // Método para iniciar sesión
    const login = () => {
        setToken(true);
    };

    // Método para cerrar sesión
    const logout = () => {
        setToken(false);
    };

    const user = {
        email: "desafiolatam2024@gmail.com",
        name: "Mario Rossi",
        memberSince: "Octubre 2023",
        orders: 15,
    };
    

  return (
    <UserContext.Provider value={{token, login, logout, user}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider