import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Day } from "./pages/day";
import { Entry } from "./pages/entry";
import { Home } from "./pages/home";
import { Week } from "./pages/week";
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Text>app</Text>
        <Route exact path="/" component={Home} />
        <Route path="/entry" component={Entry} />
        <Route path="/day" component={Day} />
        <Route path="/week" component={Week} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
