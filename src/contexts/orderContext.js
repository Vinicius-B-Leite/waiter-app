import React, { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext({})

export default function OrderContextProvider({ children }) {

    const [order, setOrder] = useState({
        chair: '',
        typeChair: '',
        totalValue: 0,
        Hamburger: [],
        Drinks: [],
        FrenchFries: [],
        Dessert: []
    })
    const [totalValue, setTotalValue] = useState(0)

    const handleAddItem = (item) => {

        setOrder(oldO => {

            let index = oldO[item.type].indexOf(item)

            if (index > -1) {
                oldO[item.type][index].quantity = item.quantity + 1
                return oldO
            }

            item['quantity'] = 1

            oldO[item.type].push(item)
            return oldO
        })
        getTotalValue()
    }

    const hadleRemoveItem = (item) => {
        setOrder(oldO => {

            let index = oldO[item.type].indexOf(item)

            oldO[item.type][index].quantity = item.quantity - 1

            return oldO
        })
        getTotalValue()
    }

    const getTotalValue = () => {
        let keys = ['Hamburger', 'Drinks', 'FrenchFries', 'Dessert']
        let tValue = 0
        keys.forEach(key => {
            order[key].forEach(food => {
                tValue += food.price * food.quantity
            })
        })
        order.totalValue = tValue
        setTotalValue(tValue)
    }

    const getAllItens = () => {
        let keys = ['Hamburger', 'Drinks', 'FrenchFries', 'Dessert']
        let foods = []
        keys.forEach(key => {
            order[key].forEach(food => {
                foods.push(food)
            })
        })
        return foods
    }




    return (
        <OrderContext.Provider value={{ order, setOrder, handleAddItem, totalValue, getAllItens, hadleRemoveItem }}>
            {children}
        </OrderContext.Provider>
    );
}