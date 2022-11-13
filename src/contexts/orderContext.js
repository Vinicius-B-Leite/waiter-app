import React, { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext({})

export default function OrderContextProvider({ children }) {

    const [awaitingOrderList, setAwaitingOrderList] = useState([])
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
    const [allItens, setAllItens] = useState()

    const handleAddOrder = (chair, typeChair, totalValue, itens, callback) => {
        let Hamburger = itens.map(food => food.type === 'Hamburger' && (food))
        let Drinks = itens.map(food => food.type === 'Drinks' && (food))
        let FrenchFries = itens.map(food => food.type === 'FrenchFires' && (food))
        let Dessert = itens.map(food => food.type === 'Dessert' && (food))

        let data = {
            chair,
            typeChair,
            totalValue,
            Hamburger,
            Drinks,
            FrenchFries,
            Dessert
        }

        setOrder(data)
        setAwaitingOrderList(oldAOL => [...oldAOL, data])
        cleanOrder()
        callback()
    }

    const cleanOrder = () => {
        setOrder({
            chair: '',
            typeChair: '',
            totalValue: 0,
            Hamburger: [],
            Drinks: [],
            FrenchFries: [],
            Dessert: []
        })
        setAllItens(null)
        setTotalValue(0)
    }

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
        getAllItens()
    }

    const hadleRemoveItem = (item) => {
        setOrder(oldO => {

            let index = oldO[item.type].indexOf(item)

            if (item.quantity === 1) {
                oldO[item.type].splice(index, 1)
                console.log("🚀 ~ file: orderContext.js ~ line 46 ~ hadleRemoveItem ~ oldO", oldO)
                return oldO
            }
            oldO[item.type][index].quantity = item.quantity - 1

            return oldO
        })
        getTotalValue()
        getAllItens()
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
        setAllItens(foods)
    }




    return (
        <OrderContext.Provider value={{ order, setOrder, handleAddItem, totalValue, allItens, hadleRemoveItem, handleAddOrder, awaitingOrderList }}>
            {children}
        </OrderContext.Provider>
    );
}