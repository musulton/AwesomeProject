import {View, Text, Image, ScrollView} from "react-native";
import Icon from "../../components/Icon/Icon";

import styles from "./styles";
import {randomColor} from "../../utils/color";

const CardBox = (props) => (
    <View style={styles.card}>
        {props.children}
    </View>
)

const BoxInfo = (props) => (
    <View style={styles.boxInfo}>
        <Icon name={props.iconName} size={22} />
        <View style={styles.infoWrapper}>
            <Text style={styles.boxInfoTitle}>{props.title}</Text>
            <Text style={styles.boxInfoSubtitle}>{props.subtitle}</Text>
        </View>
    </View>
)

const Details = (props) => {
    const {route: { params }} = props;
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        >
            <CardBox>
                <Image source={{uri: params.image}} style={styles.photo(randomColor())} />

                <View style={styles.nameWrapper}>
                    <Text style={styles.fullName}>{params.firstName} {params.lastName}</Text>
                    <Text style={styles.username}>@{params.username}</Text>
                </View>

                <BoxInfo iconName="call" title="MOBILE" subtitle={params.phone} />
                <BoxInfo iconName="mail" title="EMAIL" subtitle={params.email} />
            </CardBox>

            <CardBox>
                <BoxInfo iconName="location" title="ADDRESS" subtitle={params?.address?.address} />
            </CardBox>

            <CardBox>
                <View>
                    <BoxInfo iconName="eye" title="JOB TITLE" subtitle={params?.company?.title} />
                    <Text>{params?.company?.name} {params?.company?.department}</Text>
                </View>
            </CardBox>
        </ScrollView>
    )
}

export default Details;
