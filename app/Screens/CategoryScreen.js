import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Screen from '../components/Screen';

function CategoryScreen() {

  return (
    <View>
      <Text>Category</Text>
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

export default CategoryScreen;