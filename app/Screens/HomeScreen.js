<<<<<<< HEAD
import React from 'react'
import { View, Text } from 'react-native'
import Screen from '../components/Screen'

function HomeScreen() {
    return (
        <Screen>
            <View><Text>HOME SCREEN</Text></View>
        </Screen>
    )
}

export default HomeScreen
=======
import React from 'react';
import {View, Text, StyleSheet,TouchableWithoutFeedback, FlatList,ScrollView} from 'react-native';
import { Input,Icon } from '@ui-kitten/components';

import Screen from '../components/Screen';
import colors from '../config/colors';
import IconButton from '../components/AppIconButton';
import Card from '../components/Card';

const renderIcon = (props) => (
  <TouchableWithoutFeedback>
    <Icon {...props} fill="grey" name="search-outline"/>
  </TouchableWithoutFeedback>
);

const listing =[
  {
    id:1,
    title:"Temp card",
    subTitle:"Description goes here Description goes here Description goes here Description goes here Description goes here",
    price:"Rs.560",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  },
  {
    id:2,
    title:"Temp card",
    subTitle:"Description goes here Description goes here Description goes here Description goes here Description goes here",
    price:"Rs.960",
    image: "https://wallpaperaccess.com/full/271965.jpg"
  },
  {
    id:3,
    title:"Temp card",
    subTitle:"Description goes here Description goes here Description goes here Description goes here Description goes here",
    price:"Rs.1060",
    image: "https://images3.alphacoders.com/823/thumb-1920-82317.jpg"
  },
]

function HomeScreen() {

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
        {/* <FlatList
         data={listing}
         keyExtractor={listing => listing.id.toString()}
         renderItem={({item})=>
          <Card 
            title={item.title}
            subTitle={item.subTitle}
            imageUrl={item.image}
            price={item.price}
          />
        }
        /> */}
        {listing.map(({id,title,subTitle,image,price})=>{
          return (
            <Card
              key={id}
              title={title}
              subTitle={subTitle}
              imageUrl={image}
              price={price}
            />
          )
        })}
      </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: colors.primary,
  },
  headingContainer:{
    padding: 20,
  },
  headingText:{
    fontSize:40,
    fontWeight:"500",
  },
  furnitureTextColor:{
    color:colors.secondary,
  },
  searchContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:20
  },
  searchInput:{
    flex:0.8,
    backgroundColor: colors.white,
    borderRadius: 15,
    borderColor: colors.medium,
  },
  cardContainer:{
    padding:20,
    // marginBottom:10,
  },
  cardHeading:{
    fontSize: 30,
    color: colors.medium,
    fontWeight:"700",
    marginBottom: 20,
    marginTop:7
}
});

export default HomeScreen;
>>>>>>> homescreen
