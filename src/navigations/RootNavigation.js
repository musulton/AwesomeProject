import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import MainTab from "./MainTab";
import Login from "../screens/Login/Login";
import Splash from "../screens/Splash/Splash";

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS}
                }
                initialRouteName
            >
                <Stack.Screen name={"Splash"} component={Splash} />
                <Stack.Screen name={"Login"} component={Login} />
                <Stack.Screen name={"Main"} component={MainTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
