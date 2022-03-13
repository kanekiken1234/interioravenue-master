import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import IconButton from '../components/AppIconButton';
import colors from '../config/colors';
import { Divider } from '@ui-kitten/components';
import ProductListItem from '../components/ProductListItem';


function CartScreen() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2d72',
      title: 'Third Item',
    },
    {
      id: '58694af-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

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

        <Text style={styles.headingStyle}>Cart</Text>

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
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ProductListItem
              id={item.id}
              title={item.title} />
          )}
          keyExtractor={item => item.id} />

      </View>

      <View style={styles.bottomBar}>
        <View style={styles.priceRow}>
          <Text>Sub Total:</Text>
          <Text>Rs. 450</Text>
        </View>
        <View style={styles.priceRow}>
          <Text>Taxes:</Text>
          <Text>Rs. 450</Text>
        </View>
        <View style={styles.priceRow}>
          <Text>Delivery Charges:</Text>
          <Text>Rs. 450</Text>
        </View>
        <Divider />
        <View style={styles.priceRow}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.total}>Rs. 450</Text>
        </View>
        <View style={{
          flex: 0.3,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <IconButton
            name="PAY NOW"
            buttonWidth="100%"
            buttonHeight="75%"
            buttonBackgroundColor={colors.secondary}
            borderRadius={25}
            size="large"
          />
        </View>
      </View>
    </Screen >

  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flex: 0.35,
    overflow: 'hidden',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 30,
    backgroundColor: colors.white,
    padding: 10,
    paddingHorizontal: 20
  },
  content: {
    flex: 0.55,
    paddingHorizontal: 10,
  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    flex: 0.2
  },
  screenColor: {
    backgroundColor: colors.primary,
  },
  total: {
    fontWeight: "bold",
    fontSize: 16
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

export default CartScreen;