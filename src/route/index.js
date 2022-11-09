import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Tables from '../screens/Tables'
import WaitingList from '../screens/WaitingList'
import Settings from '../screens/Settings'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Tab = createBottomTabNavigator()


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
                <Tab.Screen name='Home' component={Home} options={HomeOptions} />
                <Tab.Screen name='Tables' component={Tables} options={TablesOptions} />
                <Tab.Screen name='WaitingList' component={WaitingList} options={WaitingListOptions} />
                <Tab.Screen name='Setting' component={Settings} options={SettingsOptions}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}