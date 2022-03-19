import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from '@ui-kitten/components';

import colors from "../config/colors";
import CartScreen from "../Screens/CartScreen";
import FeedNavigator from "./FeedNavigator";
import CategoryNavigation from "./CategoriesNavigation";
import AccountsNavigator from "./AccountsNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "black",
                inactiveTintColor: "grey",
                labelStyle: {
                    fontWeight: "bold",
                    fontSize: 11
                },
                style: { height: 60, paddingTop: 8, paddingBottom: 8 }
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
            }}
        >

            <Tab.Screen name="Home" component={FeedNavigator} options={{
                tabBarIcon: ({ color }) => <Icon fill={color} name="home-outline" style={{ height: 25, width: 25 }} />
            }} />
            <Tab.Screen name="Category" component={CategoryNavigation} options={{
                tabBarIcon: ({ color }) => <Icon fill={color} name="grid-outline" style={{ height: 25, width: 25 }} />
            }} />
            <Tab.Screen name="Cart" component={CartScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon fill={color} name="shopping-cart-outline" style={{ height: 25, width: 25 }} />
                }} />
            <Tab.Screen name="Account" component={AccountsNavigator} options={{
                tabBarIcon: ({ color }) => <Icon fill={color} name="person-outline" style={{ height: 25, width: 25 }} />
            }} />
        </Tab.Navigator>
    )
}

export default AppNavigator;