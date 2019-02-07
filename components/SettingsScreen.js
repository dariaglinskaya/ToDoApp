import React from "react";
import {
    Text,
    View,
    Button,
} from "react-native";

 export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: "Settings",
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>This is the settings</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => {
                        this.props.navigation.navigate("Profile", {
                            name: 'Darya',
                            surname: "Hlinskaya",
                        });
                    }}
                />
            </View>
        );
    }
}