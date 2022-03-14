import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native';
import { Input, Icon } from '@ui-kitten/components';

import Screen from '../components/Screen';
import colors from '../config/colors';
import IconButton from '../components/AppIconButton';
import Card from '../components/Card';

const renderIcon = (props) => (
  <TouchableWithoutFeedback>
    <Icon {...props} fill="grey" name="search-outline" />
  </TouchableWithoutFeedback>
);

const listing = [
  {
    id: 1,
    title: "Temp card 1",
    subTitle: "dasdasdadasdasdadasdasdadasdasdadasdasda",
    price: "Rs.560",
    image: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Chairs/202/IKE080012_png/IKEA-Folke_Chair-3D.png"
  },
  {
    id: 2,
    title: "Temp card 2",
    subTitle: "dasdasdadasdasdadasdasdadasdasdadasdasda",
    price: "Rs.960",
    image: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Desks/502/IKE060012_png/Alve_Desk.png"
  },
  {
    id: 3,
    title: "Temp card 3",
    subTitle: "dasdasdadasdasdadasdasdadasdasdadasdasda",
    price: "Rs.1060",
    image: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Sofa/303/IKE040019_png/IKEA-Tylosand_3_Seat_Sofa_Bed-3D.png"
  },
]

function HomeScreen({ navigation }) {

  return (
    <Screen style={styles.background}>
      <ScrollView>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Find modern</Text>
          <Text style={styles.headingText}><Text style={styles.furnitureTextColor}>furniture</Text> for you</Text>
        </View>
        <View style={styles.searchContainer}>
          <Input placeholder='search' style={styles.searchInput}
            accessoryLeft={renderIcon}
            size="large"
          />
          <IconButton
            iconName="options-2-outline"
            isIconRequired={true}
            iconWidth={25}
            iconHeight={25}
            buttonWidth={50}
            buttonHeight={50}
            borderRadius={20}
            buttonBorderColor={colors.black}
            buttonBackgroundColor={colors.black}
          />
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardHeading}>Best Seller</Text>
          </View>
          {listing.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                imageUrl={item.image}
                price={item.price}
                onPress={() => navigation.navigate("ItemDetails", item)}
              />
            )
          })}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
  },
  headingContainer: {
    padding: 20,
  },
  headingText: {
    fontSize: 40,
    fontWeight: "500",
  },
  furnitureTextColor: {
    color: colors.secondary,
  },
  searchContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  searchInput: {
    flex: 0.8,
    backgroundColor: colors.white,
    borderRadius: 15,
    borderColor: colors.medium,
  },
  cardContainer: {
    padding: 20,
    // marginBottom:10,
  },
  cardHeading: {
    fontSize: 30,
    color: colors.medium,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 7
  }
});

export default HomeScreen;
