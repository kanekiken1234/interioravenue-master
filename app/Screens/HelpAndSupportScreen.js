import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';


import IconButton from '../components/AppIconButton'
import Screen from '../components/Screen'
import colors from '../config/colors'

function HelpAndSupportScreen({ navigation }) {
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
                <Text style={styles.headingStyle}>Help&nbsp;&&nbsp;Support</Text>
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
                <View style={styles.icon}>
                    <LottieView
                        style={styles.animation}
                        autoPlay
                        loop
                        source={require('../lottie/help.json')}
                    />
                </View>
                <View style={styles.helpText}>
                    <Text style={styles.text}>Always here to assist you </Text>
                    <Text style={styles.text}>Following are the modes which you can choose</Text>
                    <Text style={styles.text}>Feel free to contact us.</Text>
                </View>
                <View style={styles.btnContainer}>
                    <IconButton
                        buttonWidth="45%"
                        buttonHeight='60%'
                        buttonBackgroundColor={colors.white}
                        isIconRequired={true}
                        iconName="message-square-outline"
                        borderRadius={25}
                        iconHeight={60}
                        iconWidth={60}
                        iconFill={colors.medium}
                    />
                    <IconButton
                        buttonWidth="45%"
                        buttonHeight='60%'
                        buttonBackgroundColor={colors.white}
                        isIconRequired={true}
                        iconName="phone-call-outline"
                        borderRadius={25}
                        iconHeight={60}
                        iconWidth={60}
                        iconFill={colors.medium}
                    />
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    animation: {
        width: 350,
    },
    btnContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    content: {
        flex: 1
    },
    headingStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    helpText: {
        flex: 0.1,
        alignItems: 'center',
        marginTop: 16
    },
    icon: {
        flex: 0.5
    },
    text: {
        fontWeight: "700",
        fontSize: 16,
        color: colors.medium
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        flex: 0.1,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16
    },
    screenColor: {
        backgroundColor: colors.primary,
    },
})

export default HelpAndSupportScreen