import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ErrorMessage = ({ error, visible }) => {
    if (!visible || !error) return <Text></Text>;
    return (
        <Text style={styles.error}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    }
})

export default ErrorMessage;

