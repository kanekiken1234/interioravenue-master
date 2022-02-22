import React from 'react'
import { useFormikContext } from 'formik'
import { Button } from '@ui-kitten/components'
import colors from '../../config/colors';

function SubmitButton({ width, status, size, title, backgroundColor = colors.secondary, color = colors.black, borderColor = colors.secondary, borderRadius = 10 }) {
    const { handleSubmit } = useFormikContext();
    return (
        <Button
            onPress={handleSubmit}
            status={status}
            size={size}
            style={{
                backgroundColor: backgroundColor,
                color: color,
                borderColor: borderColor,
                borderRadius: borderRadius,
                width: width,
            }}
        >
            {title}
        </Button>
    )
}


export default SubmitButton
