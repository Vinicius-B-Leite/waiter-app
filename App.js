import React from 'react';
import { SafeAreaView } from 'react-native';
import OrderContextProvider from './src/contexts/orderContext';
import TablesContextProvider from './src/contexts/tablesContext';
import Routes from './src/route';



const App = () => {


  return (
    <TablesContextProvider>
      <OrderContextProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </OrderContextProvider>
    </TablesContextProvider>
  );
};


export default App;
