import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppListItem from '../components/AppListItem';
import { Avatar, Divider, Icon } from '@ui-kitten/components';
import Screen from '../components/Screen';

import colors from '../config/colors'

function AccountScreen({ navigation }) {

  let i = 0;

  const profileListItems = [
    {
      id: 1,
      title: "My Orders",
      iconName: "shopping-bag-outline",
      customTitle: true,
      screen: "OrderScreen"
    },
    {
      id: 2,
      title: "Help & Support",
      iconName: "question-mark-circle-outline",
      customTitle: true,
      screen: "HelpAndSupportScreen"
    },
    {
      id: 3,
      title: "Settings",
      iconName: "settings-2-outline",
      customTitle: true,
      screen: "SettingsScreen"
    },
    {
      id: 4,
      title: "More Information",
      iconName: "info-outline",
      customTitle: true,
      screen: "MoreInfoScreen"
    },
    {
      id: 5,
      title: "Logout",
      iconName: "log-out-outline",
      customTitle: true
    }
  ]

  return (
    <Screen style={styles.screenColor}>
      <View style={styles.profileImage}>
        <View style={styles.backgroudCircle}>
          <View style={styles.layer}>
            <Avatar
              style={styles.avatar}
              source={{ uri: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/Utils/images/defaultProfilePicture.png" }} />
          </View>
        </View>
        <View>
          <Text style={styles.user}>
            Ankit Pandey
          </Text>
          <Text style={styles.userDescription}>
            sasasa@ankit.com
          </Text>
        </View>
      </View>

      <View style={styles.profileContent}>
        {
          profileListItems.map(({ id, customTitle, iconName, title, screen }) => {
            i++;
            if (i == 4) {
              return (
                <View key={id}>
                  <Divider />
                  <AppListItem
                    customTitle={customTitle}
                    title={title}
                    leftIconName={iconName}
                    rightIconName="chevron-right-outline"
                    onPress={
                      () => navigation.navigate(screen)}
                  />
                </View>
              )
            }
            else {
              return (
                <AppListItem
                  onPress={() => {
                    id === 5 ? console.log("LogOut CLicked") :
                      navigation.navigate(screen)
                  }}
                  key={id}
                  customTitle={customTitle}
                  title={title}
                  leftIconName={iconName}
                  rightIconName="chevron-right-outline"
                />
              )
            }
          })
        }
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 128,
    width: 128,
    margin: 4
  },
  backgroudCircle: {
    borderWidth: 4,
    borderRadius: 70,
    borderColor: colors.medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    transform: [{ rotateZ: '45deg' }]
  },
  layer: {
    transform: [{ rotateZ: '-45deg' }]
  },
  profileContent: {
    flex: 0.6,
    overflow: 'hidden',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 35,
    backgroundColor: colors.white
  },
  profileImage: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center"
  },
  screenColor: {
    backgroundColor: colors.primary,
  },
  user: {
    marginTop: 10,
    letterSpacing: 0.5,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.dark
  },
  userDescription: {
    color: colors.medium
  }
});

export default AccountScreen;