import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AlertNameStatic from "./AlertNameStatic";

export default function AlertMainStatic() {
  // Gán sẵn state tĩnh
  const [name] = useState("Vi Hằng");
  const [age] = useState(21);

  return (
    <View style={styles.container}>
      <AlertNameStatic name={name} age={age} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
