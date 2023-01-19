import * as ImagePicker from 'expo-image-picker'

export const showImagePicker = async (onSetImagePath) => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
        onSetImagePath(result.uri);
    }
}

export const openCamera = async (onSetImagePath) => {
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
        onSetImagePath(result.uri);
    }
}
