import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        // padding: 10
    },
    button: (disabled) => ({
        backgroundColor: "#2ECC71",
        padding: 15,
        margin: 5,
        opacity: disabled ? 0.5 : 1
    }),
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default styles;
