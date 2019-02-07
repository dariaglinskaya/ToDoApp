import React from "react";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";

import Tabs from "./navigators/bottomTabNavigator";

const AppContainer = createAppContainer(Tabs);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

AppRegistry.registerComponent("AwesomeProject", () => App);
