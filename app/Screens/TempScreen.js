import { View, Text } from 'react-native'
import React from 'react'
import ModelScreen from './ModelScreen'

export default function TempScreen({route}) {
    console.log("route from temp",route)
  return (
    <View>
      <ModelScreen route={route} />
    </View>
  )
}