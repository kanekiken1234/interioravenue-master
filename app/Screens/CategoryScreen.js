import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


function CategoryScreen({ navigation }) {

  const cards = [{
    label: "Sofa",
    iconURI: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/Utils/images/sofa.png",
    nav: "SofasScreen"
  },
  {
    label: "Chair",
    iconURI: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/Utils/images/chair.png",
    nav: "ChairsScreen"
  },
  {
    label: "Desk",
    iconURI: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/Utils/images/desk.png",
    nav: "DesksScreen"
  },
  {
    label: "Table",
    iconURI: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/Utils/images/table.png",
    nav: "TablesScreen"
  },
  {
    label: "Bed",
    iconURI: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/Utils/images/bed.png",
    nav: "BedsScreen"
  }]

  return (
    <Screen style={styles.screenColor}>
      <View style={styles.topBar}>
        <Text style={styles.headingStyle}>Categories</Text>
      </View>

      <View style={styles.content}>
        {cards.map(each => {
          return (
            <Pressable
              key={each.label}
              onPress={() => navigation.navigate(`${each.nav}`)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.light
                    : colors.white
                },
                styles.catCard,
                styles.wrapperCustom
              ]}>
              <Image style={styles.icon} source={{ uri: each.iconURI }} />
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
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default CategoryScreen;