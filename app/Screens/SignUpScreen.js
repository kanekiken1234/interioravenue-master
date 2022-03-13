import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ToastAndroid,
  AlertIOS,
  Platform,
} from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';
import * as Yup from 'yup';
import jwt_decode from 'jwt-decode';

import colors from '../config/colors';
import Screen from '../components/Screen';
import IconButton from '../components/AppIconButton';
import authApi from '../api/auth';
import AuthContext from './../auth/context';
import authStorage from '../auth/storage';

function SignUpScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email().label('Email'),
    phone: Yup.string().required().min(10).label('Phone'),
    password: Yup.string().required().min(5).label('Password'),
    confirmPassword: Yup.string().required().min(5).label('Confirm Password'),
  });

  const handleSubmit = async values => {
    const { name, email, phone, password } = values;
    const result = await authApi.signup(name, email, password, phone);
    if (!result.ok) {
      console.log(result.data.error);
      ToastAndroid.show(result.data.error, ToastAndroid.LONG);
    }
    const user = jwt_decode(result.data);
    authContext.setUser(user);
    authStorage.store(result.data);
    ToastAndroid.show('done', ToastAndroid.LONG);
  };

  return (
    <Screen style={styles.background}>
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
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
            onPress={() => navigation.navigate('Registration Option')}
          />
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.header}>Create Account.</Text>
          </View>
          <View>
            <Text style={styles.subHeader}>
              Please fill the information below.
            </Text>
          </View>
        </View>
        <AppForm
          initialValues={{
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => handleSubmit(values)}
          validationSchema={validationSchema}>
          <View style={styles.container3}>
            <View style={styles.inputFieldContainer}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="name"
                color={colors.white}
                placeholder="Enter Your Name"
                textContentType="name"
                size="large"
              />
            </View>
            <View style={styles.inputFieldContainer}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                color={colors.white}
                placeholder="Enter Your Email Id"
                textContentType="emailAddress"
                size="large"
              />
            </View>
            <View style={styles.inputFieldContainer}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                name="phone"
                placeholder="Enter Phone Number"
                color={colors.white}
                maxLength={10}
                textContentType="telephoneNumber"
                size="large"
              />
            </View>
            <View style={styles.inputFieldContainer}>
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
            <View style={styles.inputFieldContainer}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="confirmPassword"
                color={colors.white}
                placeholder="Confirm Password"
                secureTextEntry
                textContentType="password"
                size="large"
              />
            </View>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            style={styles.container4}>
            <SubmitButton
              size="giant"
              title="Sign Up"
              width="80%"
              status="basic"
            />
          </KeyboardAvoidingView>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
  },
  buttonContainer: {
    width: '80%',
  },
  container1: {
    paddingTop: 15,
    width: '100%',
    height: 64,
  },
  container2: {
    paddingLeft: 45,
    paddingTop: 15,
  },
  container3: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 45,
  },
  container4: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 30,
  },
  header: {
    color: colors.secondary,
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputFieldContainer: {
    width: '100%',
    marginBottom: 18,
  },
  mainContainer: {
    flex: 1,
  },
  subHeader: {
    color: '#545454',
    letterSpacing: 1,
    fontSize: 30,
  },
});

export default SignUpScreen;
