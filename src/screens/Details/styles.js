import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    contentContainer: {
        paddingVertical: 25
    },
    fullName: {
        fontSize: 24,
        textAlign: "center"
    },
    additionalInfo: {
      textAlign: "center"
    },
    card: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    boxInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    boxInfoTitle: {
        color: "grey",
    },
    boxInfoSubtitle: {
        fontSize: 18
    },
    infoWrapper: {
        marginLeft: 15
    },
    photo: (bgColor) => ({
        width: 150,
        height: 150,
        alignSelf: "center",
        backgroundColor: bgColor,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    })
})
