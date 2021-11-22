import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button, Input } from '@ui-kitten/components';
import colors from '../config/colors';
import Screen from '../components/Screen';


const BackButton = (props) => (
    <Icon {...props} style={{ width: 45, height: 45 }} fill='white' name='corner-up-left-outline' />
);

function SignUpScreen() {
    const [email, setEmail] = React.useState("");
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
                <View style={styles.container3}>
                    <Input
                        placeholderTextColor="#545454"
                        style={styles.inputField}
                        placeholder="Email Id"
                        color={colors.white}
                        value={email}
                        // onChangeText={nextValue => setEmail(nextValue)}
                        size="large"
                    />
                    <Input
                        placeholderTextColor="#545454"
                        style={styles.inputField}
                        placeholder="Phone Number"
                        value={email}
                        color={colors.white}
                        // onChangeText={nextValue => setEmail(nextValue)}
                        size="large"
                    />
                    <Input
                        placeholderTextColor="#545454"
                        style={styles.inputField}
                        placeholder="Password"
                        value={email}
                        color={colors.white}
                        // onChangeText={nextValue => setEmail(nextValue)}
                        size="large"
                    />
                    <Input
                        placeholderTextColor="#545454"
                        style={styles.inputField}
                        placeholder="Confirm Password"
                        value={email}
                        color={colors.white}
                        // onChangeText={nextValue => setEmail(nextValue)}
                        size="large"
                    />
                </View>
                <View style={styles.container4}>
                    <View style={styles.buttonContainer}>
                        <Button size="giant" status="basic" style={styles.submitButton}>
                            Sign Up
                        </Button>
                    </View>
                </View>
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
    buttonContainer: {
        width: "80%"
    },
    container1: {
        paddingTop: 15,
        width: '100%',
        height: 64
    },
    container2: {
        paddingLeft: 45,
        paddingTop: 15,
    },
    container3: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 45,
    },
    container4: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 30
    },
    inputField: {
        backgroundColor: "#1e1c24",
        borderRadius: 10,
        borderColor: "#545454",
        marginBottom: 36,
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
    },
    submitButton: {
        backgroundColor: colors.secondary,
        color: colors.black,
        borderColor: colors.secondary,
        borderRadius: 10,
    }
})

export default SignUpScreen
