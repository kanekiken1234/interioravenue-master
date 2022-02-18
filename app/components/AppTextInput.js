import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from '@ui-kitten/components'
import colors from '../config/colors'

export default function AppTextInput({ icon, ...other }) {
    return (
        <Input
            placeholderTextColor={colors.medium}
            style={styles.textInput} {...other}></Input>
    )
}


const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.light,
        borderRadius: 10,
        borderColor: colors.medium,
    },
})
