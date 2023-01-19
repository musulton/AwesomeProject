import React from "react";
import {View, Text} from "react-native";

import {getToken} from "../../utils/token";
import styles from "./styles";

const Splash = (props) => {
    const onNavigate = async () => {
        const token = await getToken();
        if (token) {
            props.navigation.navigate("Main")
        } else {
            props.navigation.navigate("Login")
        }
    }

    React.useEffect(() => {
        onNavigate()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash;
