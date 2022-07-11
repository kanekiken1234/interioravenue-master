import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import ItemDetailsScreen from "../Screens/ItemDetailsScreen";
import ModelScreen from "../Screens/ModelScreen";

const Stack = createStackNavigator();

const ItemDetailsNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerTitleAlign: "center",
		}}
	>
		<Stack.Screen
			name="ItemDetailsScreen"
			component={ItemDetailsScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Model"
			component={ModelScreen}
            options={{ headerShown: false }}

		/>
	</Stack.Navigator>
);

export default ItemDetailsNavigator;