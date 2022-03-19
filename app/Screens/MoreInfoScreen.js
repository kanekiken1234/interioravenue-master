import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Screen from '../components/Screen'

function OrdersScreen() {
    return (
        <Screen>
            <View style={styles.topBar}>
                <Text style={styles.headingStyle}>MoreInfoScreen</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        flex: 0.1,
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
    }
})

export default OrdersScreen