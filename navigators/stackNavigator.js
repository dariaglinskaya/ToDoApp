import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

export const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: "Home",

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