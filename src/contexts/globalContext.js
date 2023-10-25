import React, { createContext } from 'react'
import CartContext from './cartContext'
import UserContext from './userContext'


export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const cart = CartContext()
    const user = UserContext()

    return (
        <GlobalContext.Provider value={{
            cart,
            user
        }}>
            {children}
        </GlobalContext.Provider>
    )
}