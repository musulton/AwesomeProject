import React from "react";
import {View, Text, Image, SectionList, TouchableOpacity, LayoutAnimation, FlatList, Pressable} from "react-native";

import dummyUser from "../../fixtures/dummyUser.json";
import {randomColor} from "../../utils/color";
import {groupingAlphabet} from "../../utils/collection";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const contact = [...dummyUser];

const RenderImage = React.memo((props) => (
    <View style={styles.contactImageSection}>
        <Image
            source={{uri: props.image}}
            style={styles.contactImage(randomColor())}
        />
    </View>
))

const RenderContact = React.memo((props) => {
    const {contact} = props;
    const navigation = useNavigation();
    const [selectedId, setSelected] = React.useState("");

    const onLongPressHandler = React.useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setSelected(selectedId === "" ? contact.id : "")
    }, [selectedId])

    const onPressHandler = () => {
        navigation.navigate("Details", contact);
    }

    return (
        <Pressable
            style={styles.contactContainer}
            onPress={onPressHandler}
            activeOpacity={1}
            onLongPress={onLongPressHandler}
        >
            <View style={styles.contactInfoContainer}>
                <RenderImage image={contact?.image}/>
                <View>
                    <Text style={styles.contactName}>
                        {contact?.firstName} {contact?.lastName}
                    </Text>
                    <Text style={styles.contactPhone}>{contact?.phone}</Text>
                </View>
            </View>
            {selectedId === contact?.id &&
                (
                    <View style={styles.contactInfoDetail}>
                        <Text style={styles.contactName}>
                            {contact?.address?.address}
                        </Text>
                        <Text>{contact?.address?.city}</Text>
                    </View>
                )
            }
        </Pressable>
    )
})

const renderHeader = (section) => (
    <View style={styles.header}>
        <Text>{section.title}</Text>
    </View>
)

const Contact = () => {
    return (
        <SectionList
            sections={groupingAlphabet(contact, "firstName")}
            renderItem={(data) => <RenderContact contact={data.item} />}
            renderSectionHeader={(data) => renderHeader(data.section)}
            keyExtractor={(data) => data.id}
            stickySectionHeadersEnabled
            style={styles.sectionStyle}
        />
    )
}

export default Contact;
