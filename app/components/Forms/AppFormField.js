import React from 'react'
import { useFormikContext } from 'formik';
import { View } from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';


function AppFormField({ name, width, ...other }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <View style={{ width: '100%' }}>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...other}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    )
}

export default AppFormField
