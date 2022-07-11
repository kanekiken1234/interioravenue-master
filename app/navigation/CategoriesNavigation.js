import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ChairsScreen from '../Screens/ChairsScreen';
import BedsScreen from '../Screens/BedsScreen';
import SofasScreen from '../Screens/SofasScreen';
import TablesScreen from '../Screens/TablesScreen';
import DesksScreen from '../Screens/DesksScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import ItemDetailsScreen from '../Screens/ItemDetailsScreen';
import ModelScreen from "../Screens/ModelScreen";
import TempScreen from "../Screens/TempScreen";


const Stack = createStackNavigator();

const CategoryNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
        }}
        initialRouteName="CategoryScreen"
    >
        <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="SofasScreen"
            component={SofasScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="ChairsScreen"
            component={ChairsScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="BedsScreen"
            component={BedsScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="DesksScreen"
            component={DesksScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="TablesScreen"
            component={TablesScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="ItemDetailsScreen"
            component={ItemDetailsScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
			name="ModelScreen"
			component={ModelScreen}
            options={{ headerShown: false }}

		/>
        <Stack.Screen
			name="TempScreen"
			component={TempScreen}
            options={{ headerShown: false }}

		/>
    </Stack.Navigator>
);

export default CategoryNavigation;