import React from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView} from 'react-native';
import {AppForm, AppFormField, SubmitButton} from '../components/Forms';

import Screen from '../components/Screen';
import colors from '../config/colors';
import IconButton from '../components/AppIconButton';
import * as Yup from 'yup';

function SigninScreen(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password'),
  });

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.iconConatiner}>
          <IconButton
            buttonAppearance="ghost"
            buttonWidth={64}
            buttonHeight={64}
            iconName="corner-up-left-outline"
            iconWidth={45}
            iconHeight={45}
            iconFill="white"
            borderRadius={50}
            isIconRequired={true}
          />
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.heading}>Let's Sign In.</Text>
            <Text style={styles.subHeading}>Welcome back.</Text>
            <Text style={styles.subHeading}>You've been missed !</Text>
          </View>
        </View>
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
          <View style={styles.inputContainer}>
            <View style={styles.inputFiled}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                textContentType="emailAddress"
                placeholder="Enter Your Email Id"
                color={colors.white}
                size="large"
              />
            </View>
            <View style={styles.inputFiled}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                color={colors.white}
                placeholder="Enter Password"
                secureTextEntry
                textContentType="password"
                size="large"
              />
            </View>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            style={styles.buttonContainer}>
            <View style={styles.subButtonConatiner}>
              <SubmitButton
                size="giant"
                title="Sign In"
                width="100%"
                status="basic"
              />
            </View>
          </KeyboardAvoidingView>
        </AppForm>
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
