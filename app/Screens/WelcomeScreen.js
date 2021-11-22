import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import colors from '../config/colors';
import {Icon} from '@ui-kitten/components';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../Images/uff5.png')}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.yellowText}>Modern Furniture</Text>
          <View style={styles.dreamContainer}>
            <Text style={styles.content}>For Your Dream</Text>
          </View>
          <Text style={styles.content}>House</Text>

          <View style={styles.content2Container}>
            <Text style={styles.content2}>
              Our products combine functional utility
            </Text>
            <Text style={styles.content2}>
              with elegance, keeping in view the
            </Text>
            <Text style={styles.content2}>efficient use of floor space</Text>
          </View>
        </View>
        <View style={styles.arrowConatiner}>
          <View style={styles.arrowCircle}>
            <Icon
              style={styles.icon}
              fill={colors.black}
              name="arrow-right-outline"
            />
          </View>
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
    height: '40%',
    width: '100%',
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  content: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.white,
  },
  content2: {
    fontWeight: 'bold',
    color: '#545454',
    fontSize: 16,
    letterSpacing: 1,
  },
  content2Container: {
    marginTop: 15,
  },
  dreamContainer: {
    flexDirection: 'row',
  },
  yellowText: {
    color: colors.secondary,
    fontSize: 38,
    fontWeight: 'bold',
  },
  arrowConatiner: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  arrowCircle: {
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  icon: {
    width: 45,
    height: 45,
  },
});

export default WelcomeScreen;
