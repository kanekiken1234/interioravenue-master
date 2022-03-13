import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

import Screen from '../components/Screen';
import colors from '../config/colors';
import IconButton from '../components/AppIconButton';


function CategoryScreen() {
  return (
    <Screen style={styles.screenColor}>
      <View style={styles.topBar}>
        <IconButton
          buttonWidth={32}
          buttonHeight={32}
          buttonBackgroundColor={colors.white}
          iconName="corner-up-left-outline"
          iconWidth={20}
          iconHeight={20}
          iconFill={colors.medium}
          borderRadius={50}
          isIconRequired={true}
        />
        <Text style={styles.headingStyle}>Categories</Text>
        <IconButton
          buttonWidth={32}
          buttonHeight={32}
          buttonBackgroundColor={colors.white}
          iconName="more-horizontal-outline"
          iconWidth={20}
          iconHeight={20}
          iconFill={colors.medium}
          borderRadius={50}
          isIconRequired={true}
          onPress={() => navigation.navigate('Registration Option')}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.catCard}>
          <SvgUri uri='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg' height="100%" width="100%" />
        </View>
        <View style={styles.catCard}>

        </View>
        <View style={styles.catCard}>

        </View>
        <View style={styles.catCard}>

        </View>
        <View style={styles.catCard}>

        </View>
      </View>
    </Screen>

  );
}

const styles = StyleSheet.create({
  catCard: {
    height: 160,
    width: 160,
    backgroundColor: colors.white,
    margin: 18,
    borderRadius: 25,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start'
  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    height: 32,
    width: 32
  },
  screenColor: {
    backgroundColor: colors.primary,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.1,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default CategoryScreen;