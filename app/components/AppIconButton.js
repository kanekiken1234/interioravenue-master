import React from 'react'
import { Button, Icon } from '@ui-kitten/components'

function IconButton({ buttonAppearance = "filled", buttonWidth = 16, buttonHeight = 16, iconWidth = 8, iconHeight = 8, iconName = "hash-outline", iconFill = "white" }) {

    const ButtonIcon = (props) => (
        <Icon {...props} style={{ width: iconWidth, height: iconHeight }} fill={iconFill} name={iconName} />
    );

    return (
        <Button
            style={{
                width: buttonWidth,
                height: buttonHeight,
                borderRadius: 50,
            }}
            appearance={buttonAppearance}
            accessoryLeft={ButtonIcon}
        />
    )
}


export default IconButton
