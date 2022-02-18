import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import RegistrationOptionScreen from '../Screens/RegistrationOptionScreen';
import SigninScreen from '../Screens/SigninScreen';
import WelcomeScreen from './../Screens/WelcomeScreen';
import SignUpScreen from './../Screens/SignUpScreen';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const WelcomeScreenStackNav = () => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
        }}
      />
      <Stack.Navigator
        transitionerStyle={{backgroundColor: 'black'}}
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          transitionSpec: {open: config, close: config},
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Registration Option"
          component={RegistrationOptionScreen}
        />
        <Stack.Screen name="LogIn" component={SigninScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
      </Stack.Navigator>
    </>
  );
};

export default WelcomeScreenStackNav;
