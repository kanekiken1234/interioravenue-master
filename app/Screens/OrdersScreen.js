import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen'
import IconButton from '../components/AppIconButton'
import colors from '../config/colors'
import OrdersComponent from '../components/OrdersComponent'



function OrdersScreen({ navigation }) {


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
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headingStyle}>My&nbsp;Orders</Text>
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
                    onPress={() => { }}
                />
            </View>
            <View style={styles.content}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => (
                        <OrdersComponent id={item.id} title={item.title} />
                    )}
                    keyExtractor={item => item.id} />
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
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    },
    content: {
        flex: 1,
    },
    screenColor: {
        backgroundColor: colors.primary,
    },
})

export default OrdersScreen