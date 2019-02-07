import React from "react";
import {
    Text,
    View,
    Button,
} from "react-native";

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Profile: " + navigation.getParam("name", "No name")+' '+navigation.getParam("surname", "No surname"),
        };
    };
    render() {
        const { navigation } = this.props;
        const name = navigation.getParam("name", "no name");
        const surname = navigation.getParam("surname", "some default value");

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile:</Text>
                <Text>name: {JSON.stringify(name)}</Text>
                <Text>surname: {JSON.stringify(surname)}</Text>
                <Button
                    title="Go to Profile... again"
                    onPress={() =>
                        this.props.navigation.push("Profile", {
                            name: name+Math.floor(Math.random() * 100),
                        })
                    }
                />
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate("Home")} />
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}