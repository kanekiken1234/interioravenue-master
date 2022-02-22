import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import colors from '../config/colors';
import {Icon, Button} from '@ui-kitten/components';
import IconButton from '../components/AppIconButton';

const homeIcon = props => (
  <Icon
    {...props}
    fill="black"
    style={{height: 45, width: 45}}
    name="arrow-right-outline"
  />
);

function WelcomeScreen({navigation}) {
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
          <IconButton
            buttonWidth={64}
            buttonHeight={64}
            iconName="arrow-right-outline"
            iconWidth={45}
            iconHeight={45}
            iconFill={colors.black}
            buttonBackgroundColor={colors.secondary}
            buttonBorderColor={colors.secondary}
            borderRadius={50}
            isIconRequired={true}
            onPress={() => navigation.navigate('Registration Option')}
          />
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
    flex: 1,
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
});

export default WelcomeScreen;
