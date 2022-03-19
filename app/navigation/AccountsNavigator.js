import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SettingsScreen from '../Screens/SettingsScreen'
import HelpAndSupportScreen from '../Screens/HelpAndSupportScreen'
import OrderScreen from '../Screens/OrdersScreen'
import MoreInfoScreen from '../Screens/MoreInfoScreen'
import AccountScreen from '../Screens/AccountScreen';


function AccountsNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
            }}
            initialRouteName="AccountScreen"
        >
            <Stack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HelpAndSupportScreen"
                component={HelpAndSupportScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderScreen"
                component={OrderScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MoreInfoScreen"
                component={MoreInfoScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AccountsNavigator