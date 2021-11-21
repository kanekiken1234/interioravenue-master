import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../Images/newest.webp')}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.content}>Modern Furniture</Text>
          <View style={styles.dreamContainer}>
            <Text style={styles.content}>For you</Text>
            <Text style={styles.dream}>Dream</Text>
          </View>
          <Text style={styles.content}>House</Text>
        </View>
        <View style={styles.arrowConatiner}>
          <View style={styles.arrowCircle}></View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    position: 'absolute',
  },
  textContainer: {
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    width: '70%',
  },
  content: {
    paddingLeft: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.white,
  },
  dreamContainer: {
    flexDirection: 'row',
  },
  dream: {
    color: colors.secondary,
    fontSize: 35,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  arrowConatiner: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowCircle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
