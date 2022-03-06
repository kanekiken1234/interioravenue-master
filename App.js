import 'react-native-gesture-handler';
<<<<<<< HEAD
import React from 'react';
=======
import React, {useEffect, useState} from 'react';
>>>>>>> homescreen
import {StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ThemeContext} from './app/config/theme-context';
import {NavigationContainer} from '@react-navigation/native';
<<<<<<< HEAD

import WelcomeScreenStackNav from './app/navigation/WelcomeScreenStackNav';
import navigationTheme from './app/navigation/navigationTheme';

export default () => {
  const [theme, setTheme] = React.useState('light');
=======
import jwt_decode from 'jwt-decode';

import WelcomeScreenStackNav from './app/navigation/WelcomeScreenStackNav';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthContext from './app/auth/context';
import HomeScreen from './app/Screens/HomeScreen';
import authStorage from './app/auth/storage';

export default () => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const restoreTOken = async () => {
    const token = await authStorage.get();
    console.log('token:', token);
    if (!token) return;
    setUser(jwt_decode(token));
  };

  useEffect(() => {
    restoreTOken();
  }, []);

>>>>>>> homescreen
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
<<<<<<< HEAD
    <NavigationContainer theme={navigationTheme}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <IconRegistry icons={EvaIconsPack} />
          <WelcomeScreenStackNav />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </NavigationContainer>
=======
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={navigationTheme}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <ApplicationProvider {...eva} theme={eva[theme]}>
            <IconRegistry icons={EvaIconsPack} />
            {user ? <AppNavigator /> : <WelcomeScreenStackNav />}
          </ApplicationProvider>
        </ThemeContext.Provider>
      </NavigationContainer>
    </AuthContext.Provider>
>>>>>>> homescreen
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
