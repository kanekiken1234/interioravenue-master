import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Screen from '../components/Screen';

function CartScreen() {

  return (
    <View>
      <Text>Cart</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default CartScreen;