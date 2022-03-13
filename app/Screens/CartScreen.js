import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import IconButton from '../components/AppIconButton';
import colors from '../config/colors';
import AppListItem from '../components/AppListItem';
import { Divider } from '@ui-kitten/components';


function CartScreen() {

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
          onPress={() => navigation.navigate('Registration Option')}
        />

        <Text style={styles.headingStyle}>Cart</Text>

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
          onPress={() => navigation.navigate('Registration Option')}
        />


      </View>
      <View style={styles.content}>

      </View>
      <View style={styles.bottomBar}>
        <AppListItem
          customTitle="Sub Total"
          title="Sub Total"
          rightIconName="chevron-right-outline"
          height={52}
        />
        <AppListItem
          customTitle="Delivery Charges"
          title="Delivery Charges"
          rightIconName="chevron-right-outline"
          height={52}
        />
        <AppListItem
          customTitle="Taxes"
          title="Taxes"
          rightIconName="chevron-right-outline"
          height={52}
        />
        <Divider style={{ height: 1.5, width: "88%" }} />
        <AppListItem
          customTitle="Total"
          title="Total"
          rightIconName="chevron-right-outline"
        />
        <IconButton
          buttonHeight={50}
          buttonWidth="90%"
          isIconRequired={false}
          name="PAY NOW"
          buttonBackgroundColor={colors.secondary}
          buttonBorderColor={colors.secondary}
          status="basic"
          borderRadius={25}
          size="large"
        />
      </View>
    </Screen >

  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flex: 0.4,
    overflow: 'hidden',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 35,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 16
  },
  content: {
    flex: 0.5
  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 16
  },
  screenColor: {
    backgroundColor: colors.primary,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.1,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default CartScreen;