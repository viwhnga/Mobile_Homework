import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

export default function AlertNameStatic({name, age}) {
  const handlePress = () => {
    Alert.alert('Thông báo', `Hello ${name}, ${age} tuổi`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>
        Hello {name}, {age} tuổi
      </Text>
      <Button title="Hello" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  hello: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
