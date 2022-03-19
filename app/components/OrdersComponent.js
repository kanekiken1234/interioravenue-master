import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'

import IconButton from './AppIconButton'

function OrdersComponent({ id, title }) {
    return (
        <View style={styles.card}>
            <View style={styles.section1}>
                <Text style={styles.order}>Order No.: 181411056</Text>
                <Text style={styles.date}>Date: 21/20/80</Text>
            </View>
            <View style={styles.section2}>
                <View style={styles.container}>
                    <View style={styles.subsec1}>
                        <Text style={styles.light}>Tracking ID: <Text style={styles.emp}>5646478</Text></Text>
                        <Text style={styles.light}>Total: <Text style={styles.emp}>Rs. 5000</Text></Text>
                    </View>
                    <View style={styles.subsec1}>
                        <Text style={styles.light}>Quantity: <Text style={styles.emp}>5</Text></Text>
                    </View>
                </View>
            </View>
            <View style={styles.section3}>
                <View style={[{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }, styles.container]}>
                    <View style={{ flex: 0.5 }}>
                        <IconButton
                            name="DETAILS"
                            buttonWidth="100%"
                            buttonHeight="75%"
                            borderRadius={25}
                            size="medium"
                            buttonBorderColor={colors.black}
                            buttonBackgroundColor={colors.white}
                        />
                    </View>
                    <View>
                        <IconButton
                            iconName='clock-outline'
                            buttonWidth={32}
                            buttonHeight={32}
                            buttonBackgroundColor={colors.white}
                            buttonBorderColor={colors.white}
                            iconWidth={20}
                            iconHeight={20}
                            iconFill={colors.medium}
                            borderRadius={50}
                            isIconRequired={true} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        height: 180,
        marginHorizontal: 20,
        marginVertical: 16,
        borderRadius: 25,
        flex: 1
    },
    container: {
        flex: 1,
    },
    date: {
        fontWeight: "300",
        color: colors.medium,
    },
    emp: {
        fontWeight: "bold"
    },
    light: {
        color: colors.medium,
        fontWeight: "300",
    },
    order: {
        fontWeight: 'bold',
        fontSize: 16
    },
    section1: {
        flex: 0.33,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    section2: {
        flex: 0.33,
    },
    section3: {
        flex: 0.33,
    },
    subsec1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
})

export default OrdersComponent