import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { ListItem, Icon } from '@ui-kitten/components';


import colors from '../config/colors';
import AppIconButton from '../components/AppIconButton';

function AppListItem({ id, leftIconName, rightIconName, title, height = 77, customTitle = false }) {

    const renderItemIcon = (leftIconName) => (
        <AppIconButton
            buttonWidth={30}
            buttonHeight={30}
            iconName={leftIconName}
            iconWidth={28}
            iconHeight={28}
            iconFill={colors.medium}
            borderRadius={10}
            buttonBackgroundColor={colors.white}
            buttonBorderColor={colors.white}
            isIconRequired={true}
        />
    );

    const renderItemAccessory = (rightIconName) => (
        <AppIconButton
            buttonWidth={30}
            buttonHeight={30}
            iconName={rightIconName}
            iconWidth={28}
            iconHeight={28}
            iconFill={colors.medium}
            borderRadius={10}
            buttonBackgroundColor={colors.white}
            buttonBorderColor={colors.white}
            isIconRequired={true}
        />
    );

    const TitleElement = ({ title }) => {
        return (
            <Text style={styles.textStyle}>
                {title}
            </Text>
        )
    }

    return (
        <ListItem
            key={id}
            style={[{ height: height }, styles.listStyle]}
            title={customTitle ? <TitleElement title={title} /> : title}
            accessoryLeft={leftIconName ? renderItemIcon(leftIconName) : ""}
            accessoryRight={renderItemAccessory(rightIconName)}
        />
    )
}

const styles = StyleSheet.create({
    iconBackground: {
        backgroundColor: colors.black,
        height: 32,
        width: 32
    },
    listStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: colors.white
    },
    textStyle: {
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: "600",
        color: colors.medium
    }
})

export default AppListItem