import React from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {ThemeContext} from './app/config/theme-context';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import SigninScreen from './app/Screens/SigninScreen';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import SignUpScreen from './app/Screens/SignUpScreen';
import RegistrationOptionScreen from './app/Screens/RegistrationOptionScreen';

export default () => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <IconRegistry icons={EvaIconsPack} />
        {/* <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button onPress={toggleTheme} status="basic">
            SWITCH
          </Button>
          <Text>Ruthvik</Text>
        </Layout> */}
        {/* <WelcomeScreen /> */}
        {/* <SigninScreen /> */}
        {/* <SignUpScreen /> */}
        <RegistrationOptionScreen />
      </ApplicationProvider>
    </ThemeContext.Provider>
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
