import React, { createContext } from 'react';
import { View } from 'react-native';

export const OrderContext = createContext({})

export default function OrderContextProvider({children}) {

    const [order, setOrder] = []

    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    );
}