import {SafeAreaView, StyleSheet, StatusBar, Platform} from "react-native";

import MainNavigation from "./src/navigations/MainNavigation"

const barStyle = Platform.OS === "ios" ? "dark-content" : "light-content";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle} />
      <MainNavigation />
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
