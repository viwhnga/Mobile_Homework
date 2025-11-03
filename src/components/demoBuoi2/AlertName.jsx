import React from "react";
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

export default function AlertName({name, age}) {
  const handlePress = () => {
    Alert.alert('Thông báo', `Xin chào ${name}, ${age} tuổi`);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.hello}>Hello {name}</Text> */}
      <Button title="Button" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  hello: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
