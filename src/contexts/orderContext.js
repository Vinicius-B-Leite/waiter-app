import React, { createContext, useState } from 'react';

export const OrderContext = createContext({})

export default function OrderContextProvider({ children }) {

    const [order, setOrder] = useState([])

    const handleAddItem = (item) => {

        setOrder(oldO => {

            item['quantity'] = item.quantity + 1 || 1

            if (oldO.indexOf(item) >= 0) {
                let index = oldO.indexOf(item)
                oldO[index].quantity = item.quantity

                return [...oldO]
            }

            return [...oldO, item]
        })
    }

    const getTotalValue = () => {
        let totalValue = 0
        order.forEach(item => {
            totalValue += item.price * item.quantity
        })

        return totalValue.toFixed(2).replace('.', ',')
    }

    return (
        <OrderContext.Provider value={{ order, setOrder, handleAddItem, getTotalValue }}>
            {children}
        </OrderContext.Provider>
    );
}