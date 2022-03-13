import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import ItemDetailsScreen from "../Screens/ItemDetailsScreen";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerTitleAlign: "center",
		}}
	>
		<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="ItemDetails"
			component={ItemDetailsScreen}
			// options={{ title: "" }}
            options={{ headerShown: false }}
		
		/>
	</Stack.Navigator>
);

export default FeedNavigator;