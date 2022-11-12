import React from 'react';
import { SafeAreaView } from 'react-native';
import OrderContextProvider from './src/contexts/orderContext';
import Routes from './src/route';



const App = () => {


  return (
    <OrderContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </OrderContextProvider >
  );
};


export default App;
