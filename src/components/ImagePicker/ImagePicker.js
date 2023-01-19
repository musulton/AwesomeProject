import * as React from 'react';
import {View, Image, ActivityIndicator, Text} from 'react-native';
import {Camera} from 'expo-camera'

import {showImagePicker, openCamera} from "../../utils/imagePicker";
import Button from "../Button/Button";
import styles from './styles';

const BUTTON_OPTS = {
    CAMERA: {
        onPress: openCamera,
    },
    FILE: {
        onPress: showImagePicker,
    }
}

const ImagePicker = (props) => {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return <ActivityIndicator />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <Button
                onPress={() => BUTTON_OPTS[props.type].onPress(props.onChange)}
                text={props.buttonText}
            />
            { props.value && (
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props.value }}
                    style={styles.image}
                />
            </View> ) }
        </View>
    );
};

export default ImagePicker;
