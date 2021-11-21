import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Button, Layout, Text} from '@ui-kitten/components';
import {default as myTheme} from './app/config/theme.json';
import {ThemeContext} from './app/config/theme-context';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

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
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button onPress={toggleTheme} status="basic">
            SWITCH
          </Button>
          <Text>Ruthvik</Text>
        </Layout>
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
