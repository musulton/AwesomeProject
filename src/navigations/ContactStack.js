import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import Contact from "../screens/Contact/Contact";
import Details from "../screens/Details/Details";

const Stack = createStackNavigator();

const ContactStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

export default ContactStack;
