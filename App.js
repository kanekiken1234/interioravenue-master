import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ThemeContext} from './app/config/theme-context';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreenStackNav from './app/navigation/WelcomeScreenStackNav';
import navigationTheme from './app/navigation/navigationTheme';

export default () => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <NavigationContainer theme={navigationTheme}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <IconRegistry icons={EvaIconsPack} />
          <WelcomeScreenStackNav />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </NavigationContainer>
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
