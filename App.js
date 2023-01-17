import {SafeAreaView, StyleSheet, StatusBar, Platform} from "react-native";
import {Registration} from "./src/screens/Registration";
// import ContactList from "./src/screens/ContactList/ContactList";
// import {groupingAlphabet} from "./src/utils/collection";

const barStyle = Platform.OS === "ios" ? "dark-content" : "light-content";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <Registration />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
