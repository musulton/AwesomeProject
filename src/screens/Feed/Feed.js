import {View, Text} from "react-native";

import styles from "./styles";
import Button from "../../components/Button/Button";

const Feed = (props) => {
    const {
        route: { params }
    } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Feed Screen</Text>
            <Text style={styles.text}>{params?.name}</Text>
            <Button text={"Back"} onPress={props.navigation.goBack} />
        </View>
    )
}

export default Feed;
