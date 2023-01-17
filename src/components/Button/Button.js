import {
    TouchableOpacity, View, Text
} from "react-native";

import styles from "./styles";

const Button = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={props.onPress}
            >
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;
