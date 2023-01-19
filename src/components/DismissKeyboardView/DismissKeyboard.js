import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const DismissKeyboardHOC = () => {
    return ({ children }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {children}
        </TouchableWithoutFeedback>
    );
};

const DismissKeyboardView = DismissKeyboardHOC(View)
export default DismissKeyboardView;
