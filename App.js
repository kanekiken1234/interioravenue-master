import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ThemeContext} from './app/config/theme-context';
import {NavigationContainer} from '@react-navigation/native';
import jwt_decode from 'jwt-decode';

import WelcomeScreenStackNav from './app/navigation/WelcomeScreenStackNav';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

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

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
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
    // <ItemDetailsScreen />
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
