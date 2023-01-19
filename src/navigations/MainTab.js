import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon/Icon";
import AddCourse from "../screens/AddCourse/AddCourse";
import CourseList from "../screens/CourseList/CourseList";
import ContactStack from "./ContactStack";

const Tabs = createBottomTabNavigator();
const MainTab = () => {
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
                name="CourseList"
                component={CourseList}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => <Icon name={focused ? "newspaper" : "newspaper-outline"} />
                }}
            />
            <Tabs.Screen
                name="AddCourse"
                component={AddCourse}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => <Icon name={focused? "add-circle" : "add-circle-outline"} />
                }}
            />
        </Tabs.Navigator>
    )
}

export default MainTab;
