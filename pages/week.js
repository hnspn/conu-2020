import React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

export function Week() {
  return (
    <View>
      <Text>week</Text>
      <Link to="/">
        <Text>home</Text>
      </Link>
      <Link to="/day">
        <Text>day</Text>
      </Link>
    </View>
  );
}
