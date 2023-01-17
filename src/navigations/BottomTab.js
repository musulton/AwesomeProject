import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon/Icon";
import Feed from "../screens/Feed/Feed";
import Settings from "../screens/Settings/Settings";
import ContactStack from "./ContactStack";

const Tabs = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="ContactStack"
                component={ContactStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => <Icon name={focused ? "people" : "people-outline"} />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => <Icon name={focused ? "newspaper" : "newspaper-outline"} />
                }}
            />
            <Tabs.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => <Icon name={focused? "settings" : "settings-outline"} />
                }}
            />
        </Tabs.Navigator>
    )
}

export default BottomTab;
