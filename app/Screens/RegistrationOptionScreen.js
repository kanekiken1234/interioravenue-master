import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';
import Screen from './../components/Screen';
import IconButton from '../components/AppIconButton';

function RegistrationOptionScreen({navigation}) {
  return (
    <Screen>
      <View style={styles.mainContainer}>
        <View style={styles.Container1}>
          <LottieView
            style={styles.animation}
            autoPlay
            loop
            source={require('../lottie/registration.json')}
          />
        </View>
        <View style={styles.container2}>
          <Text style={styles.heading}>Join Interior Avenue Family</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.subHeading}>Design your house to perfection</Text>
          <Text style={styles.subHeading}> by joining with us !</Text>
        </View>
        <View style={styles.container4}>
          <View style={styles.buttonContainer}>
            <IconButton
              buttonHeight={50}
              buttonWidth="40%"
              isIconRequired={false}
              name="Register"
              buttonBackgroundColor={colors.white}
              buttonBorderColor={colors.white}
              status="basic"
              borderRadius={10}
              size="large"
              onPress={() => navigation.navigate('Register')}
            />
            <IconButton
              buttonHeight={50}
              buttonWidth="40%"
              isIconRequired={false}
              name="Sign In"
              buttonBackgroundColor={colors.secondary}
              buttonBorderColor={colors.secondary}
              status="basic"
              borderRadius={10}
              size="large"
              onPress={() => navigation.navigate('LogIn')}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.black,
    height: '100%',
    width: '100%',
  },
  animation: {
    width: 350,
  },
  Container1: {
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container2: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  container3: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  container4: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 40,
  },
  heading: {
    color: colors.secondary,
    fontSize: 35,
    fontWeight: 'bold',
  },
  subHeading: {
    color: '#545454',
    fontSize: 24,
    letterSpacing: 1,
  },
});

export default RegistrationOptionScreen;
