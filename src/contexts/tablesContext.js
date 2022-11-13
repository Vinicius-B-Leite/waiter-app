import React, { createContext, useState } from 'react';
import { View } from 'react-native';


export const TablesContext = createContext([])

export default function TablesContextProvider({children}) {

    const [tablesSelecteds, setTablesSelecteds] = useState([])
    const [selectATable, setSelectATable] = useState()
    
    const handleSelectTable = (id) => {
        let data = {
            id,
            type: ['2', '5', '8'].includes(id) ? 'compost' : 'simple'
        }
        setSelectATable(data)
        setTablesSelecteds(oldT => [...oldT, data.id])
    }

    const handleAddTablesSelecteds = (id) => {
        setSelectATable(oldS => [...oldS, id])
    }

    const cleanSelectedTable = () => {
        setSelectATable(null)
    }
    return (
        <TablesContext.Provider value={{handleSelectTable, tablesSelecteds, selectATable, handleAddTablesSelecteds, cleanSelectedTable}} >
            {children}
        </TablesContext.Provider>
    );
}