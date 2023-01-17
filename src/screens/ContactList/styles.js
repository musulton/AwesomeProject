import {StyleSheet} from "react-native";

export default StyleSheet.create({
    header: {
        backgroundColor: "#efefef",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    contactContainer: {
        marginVertical: 7,
        overflow: "hidden"
    },
    contactInfoContainer: {
        alignItems: "center",
        flexDirection: "row",
    },
    contactImageSection: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20
    },
    contactImage: (bgColor) => ({
        width: 60,
        height: 60,
        backgroundColor: bgColor,
        borderRadius: 50
    }),
    contactName: {
        fontSize: 24
    },
    contactPhone: {
        fontSize: 16,
        color: "grey"
    },
    contactInfoDetail: {
        padding: 20
    },
})
