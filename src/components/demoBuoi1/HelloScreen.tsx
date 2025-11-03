import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import MyButton from "./MyButton"; // import file MyButton

export default function HelloScreen() {
  const showAlert = () => {
    Alert.alert("Thông báo", "Hello Vi Hằng");
  };

  return (
    <View style={styles.container}>
      <MyButton title="Nhấn để chào" onPress={showAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
});
