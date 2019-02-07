import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { RootStack } from "../navigators/stackNavigator";
import { SettingsStack } from "../navigators/settingsNavigator";
import { Ionicons } from '@expo/vector-icons';

export default (Tabs = createBottomTabNavigator(
    {
        Home: RootStack,
        Settings: SettingsStack,
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            style: {
                textAlign: "center",
            },
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            navBarTitleTextCentered: true,
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') {
                iconName = 'md-home';
              } else if (routeName === 'Settings') {
                iconName = 'md-settings';
              }
              return <Ionicons name={iconName} size={25} />
          },
    })},
));
