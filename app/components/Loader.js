import React from 'react'
import LottieView from 'lottie-react-native';
import { View } from 'react-native'

import colors from '../config/colors';

function Loader() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.light
        }}>
            <LottieView
                autoPlay
                loop
                source={require('../lottie/loader.json')}
            />
        </View>
    )
}

export default Loader