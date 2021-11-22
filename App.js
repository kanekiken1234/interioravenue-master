import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Button, Layout, Text} from '@ui-kitten/components';
import {default as myTheme} from './app/config/theme.json';
import {ThemeContext} from './app/config/theme-context';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import SigninScreen from './app/Screens/SigninScreen';

export default () => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    // <ViroARSceneNavigator
    //   autofocus={true}
    //   initialScene={{
    //     scene: HelloWorldSceneAR,
    //   }}
    //   style={styles.f1}
    // />
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
        <SigninScreen />
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
