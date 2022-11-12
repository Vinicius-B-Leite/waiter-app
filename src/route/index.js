import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, View } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Tables from '../screens/Tables'
import WaitingList from '../screens/WaitingList'
import Settings from '../screens/Settings'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TAB_BAR_HEIGHT = Dimensions.get('screen').height / 11
const TAB_BAR_OPTIONS = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        height: TAB_BAR_HEIGHT,
        paddingVertical: 8,
        backgroundColor: '#171717',
        borderTopWidth : 0
    },
    tabBarLabelStyle: {
        paddingBottom: 10,
        fontSize: 11,
    },
    tabBarActiveTintColor: '#f97e20',
    tabBarInactiveTintColor: '#636363'
    
}
const HomeOptions = {
    tabBarIcon: ({ focused }) => <Ionicons name='add-circle' size={33} color={focused ? '#f97e20' : '#636363'} />
}

const TablesOptions = {
    tabBarIcon: ({ focused }) => <FontAwesome5 name='chair' size={27} color={focused ? '#f97e20' : '#636363'} />
}
const WaitingListOptions = {
    tabBarIcon: ({ focused }) => <AntDesign name='clockcircle' size={26} color={focused ? '#f97e20' : '#636363'} />
}
const SettingsOptions = {
    tabBarIcon: ({ focused }) => <AntDesign name='setting' size={26} color={focused ? '#f97e20' : '#636363'} />
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={TAB_BAR_OPTIONS}>
                <Tab.Screen name='HomeStack' component={HomeRoute} options={HomeOptions} />
                <Tab.Screen name='Tables' component={Tables} options={TablesOptions} />
                <Tab.Screen name='WaitingList' component={WaitingList} options={WaitingListOptions} />
                <Tab.Screen name='Setting' component={Settings} options={SettingsOptions}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function HomeRoute({navigation, route}){
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(['CartRoute'].includes(getFocusedRouteNameFromRoute(route))){
            navigation.setOptions({tabBarStyle: {display: 'none'}});
           } else {
           navigation.setOptions(TAB_BAR_OPTIONS);
          }
    }, [navigation, route]);

    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='CartRoute' component={CartRoute} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

function CartRoute ({navigation, route}){
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='Tables' component={Tables} />
        </Stack.Navigator>
    )
}