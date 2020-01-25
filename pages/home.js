import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export function Home({ history }) {
  return (
    <View>
      <Text>home</Text>
      <Button
        title="record"
        onPress={() => {
          history.push("/entry");
        }}
      ></Button>
    </View>
  );
}
