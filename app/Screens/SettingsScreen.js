import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Yup from 'yup';



import Screen from '../components/Screen'
import IconButton from '../components/AppIconButton'
import colors from '../config/colors'
import { AppForm, AppFormField } from '../components/Forms'


function SettingsScreen({ navigation }) {


    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required().email().label('Email'),
        phone: Yup.string().required().min(10).label('Phone'),
        address: Yup.string().min(10).label("Address")
    });
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
                <Text style={styles.headingStyle}>Settings</Text>
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
                <AppForm
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                    }}
                    onSubmit={values => { }}
                    validationSchema={validationSchema}>
                    <View style={styles.container3}>
                        <View style={styles.inputFieldContainer}>
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                backgroundColor={colors.light}
                                name="name"
                                color={colors.black}
                                placeholder="Enter Your Name"
                                textContentType="name"
                                size="large"
                            />
                        </View>
                        <View style={styles.inputFieldContainer}>
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                backgroundColor={colors.light}
                                keyboardType="email-address"
                                name="email"
                                color={colors.black}
                                placeholder="Enter Your Email Id"
                                textContentType="emailAddress"
                                size="large"
                            />
                        </View>
                        <View style={styles.inputFieldContainer}>
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                backgroundColor={colors.light}
                                keyboardType="numeric"
                                name="phone"
                                placeholder="Enter Phone Number"
                                color={colors.black}
                                maxLength={10}
                                textContentType="telephoneNumber"
                                size="large"
                            />
                        </View>
                        <View style={styles.inputFieldContainer}>
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                backgroundColor={colors.light}
                                name="address"
                                placeholder="Enter Address"
                                color={colors.black}
                                size="large"
                            />
                        </View>
                    </View>
                </AppForm>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    animation: {
        width: 300,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    container3: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 45,
    },
    inputFieldContainer: {
        width: '100%',
        marginBottom: 18,
    },
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
        paddingRight: 16
    },
    screenColor: {
        backgroundColor: colors.primary,
    },
})

export default SettingsScreen