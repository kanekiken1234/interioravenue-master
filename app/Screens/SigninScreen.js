import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Screen from '../components/Screen';
import {Icon, Button, Input} from '@ui-kitten/components';
import colors from '../config/colors';

const BackButton = props => (
  <Icon
    {...props}
    style={{height: 45, width: 45}}
    fill="white"
    name="corner-up-left-outline"
  />
);

function SigninScreen(props) {
  const [email, setEmail] = React.useState('');
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.iconConatiner}>
          {/* <Icon
            style={styles.icon}
            name="corner-up-left-outline"
            fill={colors.white}
          /> */}
          <Button
            style={styles.icon}
            appearance="ghost"
            accessoryLeft={BackButton}
            onPress={() => console.log('pr')}
          />
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.heading}>Let's Sign In.</Text>
            <Text style={styles.subHeading}>Welcome back.</Text>
            <Text style={styles.subHeading}>You've been missed !</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              placeholder="Enter Your Email Id"
              value={email}
              onChangeText={nextValue => setEmail(nextValue)}
              size="large"
            />
          </View>
        </View>
        <View></View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    height: '100%',
  },
  iconConatiner: {
    // backgroundColor: 'red',
    width: '100%',
    height: 64,
    // paddingLeft: 4,
    paddingTop: 15,
  },
  icon: {
    // backgroundColor: 'yellow',
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  headingContainer: {
    // backgroundColor: 'green',
    height: '40%',
  },
  heading: {
    paddingTop: 15,
    paddingLeft: 45,
    marginBottom: 10,
    color: colors.secondary,
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeading: {
    paddingLeft: 45,
    fontSize: 30,
    color: '#545454',
    letterSpacing: 1,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 45,
    // backgroundColor: 'red',
  },
  input: {
    backgroundColor: colors.black,
    borderRadius: 10,
    color: colors.white,
  },
});

export default SigninScreen;
