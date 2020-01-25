import React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

export function Entry() {
  return (
    <View>
      <Text>entry</Text>
      <Link to="/day">
        <Text>day</Text>
      </Link>
      <Link to="/week">
        <Text>week</Text>
      </Link>
      <Link to="/">
        <Text>home</Text>
      </Link>
    </View>
  );
}
