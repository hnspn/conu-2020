import React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

export function Day() {
  return (
    <View>
      <Text>Day</Text>
      <Link to="/">
        <Text>home</Text>
      </Link>
      <Link to="/week">
        <Text>week</Text>
      </Link>
    </View>
  );
}
