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
  const [password, setPassword] = React.useState('');
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.iconConatiner}>
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
            <View style={styles.inputFiled}>
              <Input
                style={styles.input}
                placeholder="Enter Your Email Id"
                value={email}
                placeholderTextColor="#545454"
                color={colors.white}
                onChangeText={nextValue => setEmail(nextValue)}
                size="large"
              />
            </View>
            <View style={styles.inputFiled}>
              <Input
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry
                value={password}
                placeholderTextColor="#545454"
                color={colors.white}
                onChangeText={nextValue => setPassword(nextValue)}
                size="large"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.subButtonConatiner}>
            <Button size="giant" status="basic" style={styles.submitButton}>
              Sign In
            </Button>
          </View>
        </View>
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
    width: '100%',
    height: 64,
    paddingTop: 15,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 50,
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
  },
  inputFiled: {
    width: '100%',
    marginBottom: 36,
  },
  input: {
    backgroundColor: '#1E1C24',
    borderRadius: 10,
    color: colors.white,
    borderColor: '#545454',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 30,
  },
  subButtonConatiner: {
    width: '80%',
  },
  submitButton: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderRadius: 10,
  },
});

export default SigninScreen;
