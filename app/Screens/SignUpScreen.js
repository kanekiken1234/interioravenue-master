import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button } from '@ui-kitten/components';
import colors from '../config/colors';
import Screen from '../components/Screen';


const BackButton = (props) => (
    <Icon {...props} style={{ width: 45, height: 45 }} fill='white' name='corner-up-left-outline' />
);

function SignUpScreen() {
    return (
        <Screen style={styles.background}>
            <View style={styles.mainContainer}>
                <View style={styles.container1}>
                    <Button
                        style={styles.backButton}
                        appearance='ghost'
                        accessoryLeft={BackButton}
                    />
                </View>
                <View style={styles.container2}>
                    <View>
                        <Text style={styles.header}>Create Account.</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeader}>Please fill the information below.</Text>
                    </View>
                </View>
                <View></View>
                <View></View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    backButton: {
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    background: {
        backgroundColor: colors.black
    },
    container1: {
        paddingTop: 15,
        paddingLeft: 10,
    },
    container2: {
        paddingLeft: 25,
        paddingTop: 25,
    },
    header: {
        color: colors.secondary,
        fontSize: 40,
        fontWeight: "bold"
    },
    mainContainer: {
        flex: 1
    },
    subHeader: {
        color: "#545454",
        letterSpacing: 1,
        fontSize: 30
    }
})

export default SignUpScreen
