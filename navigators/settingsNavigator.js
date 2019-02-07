import { createStackNavigator, createAppContainer } from "react-navigation";
import SettingsScreen from '../components/SettingsScreen';
import ProfileScreen from '../components/ProfileScreen';

export const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Settings",

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
                flex: 1,
            },
        },
    },
);