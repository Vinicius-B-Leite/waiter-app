import React, { createContext, useState } from 'react';
import { View } from 'react-native';


export const TablesContext = createContext([])

export default function TablesContextProvider({children}) {

    const [tablesSelecteds, setTablesSelecteds] = useState(['2'])
    const [selectATable, setSelectATable] = useState()
    
    const handleSelectTable = (id) => {
        let data = {
            id,
            type: ['2', '5', '8'].includes(id) ? 'compost' : 'simple'
        }
        setSelectATable(data)
    }

    const handleAddTablesSelecteds = (id) => {
        setSelectATable(oldS => [...oldS, id])
    }
    return (
        <TablesContext.Provider value={{handleSelectTable, tablesSelecteds, selectATable, handleAddTablesSelecteds}} >
            {children}
        </TablesContext.Provider>
    );
}