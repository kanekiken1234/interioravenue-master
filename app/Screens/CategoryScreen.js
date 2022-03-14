import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


import Screen from '../components/Screen';
import colors from '../config/colors';
import IconButton from '../components/AppIconButton';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


function CategoryScreen() {

  const sofa = require("../Images/sofa.png")
  const chair = require("../Images/chair.png")
  const desk = require("../Images/desk.png")
  const table = require("../Images/table.png")
  const bed = require("../Images/bed.png")

  const cards = [{
    label: "Sofa",
    icon: sofa
  },
  {
    label: "Chair",
    icon: chair
  },
  {
    label: "Desk",
    icon: desk
  },
  {
    label: "Table",
    icon: table
  },
  {
    label: "Bed",
    icon: bed
  }]

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
        {cards.map(each => {
          return (
            <Pressable key={each.label} style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? colors.light
                  : colors.white
              },
              styles.catCard,
              styles.wrapperCustom
            ]}>
              <Image style={styles.icon} source={each.icon} />
              <Text style={styles.label}>{each.label}</Text>
            </Pressable>
          )
        })}
      </View>
    </Screen>

  );
}

const styles = StyleSheet.create({
  catCard: {
    height: 160,
    width: 160,
    margin: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: "center"
  },
  content: {
    flex: 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'flex-start'
  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    height: 64,
    width: 64,
    borderWidth: 1,
  },
  label: {
    color: colors.medium,
    fontWeight: 'bold',
    marginTop: 16
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