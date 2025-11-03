import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function ChildComponent({name, age, onUpdate}) {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Component Con</Text>

      <Text style={styles.text}>Tên từ cha: {name}</Text>
      <Text style={styles.text}>Tuổi từ cha: {age}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới..."
        value={newName}
        onChangeText={setNewName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi mới..."
        value={newAge}
        onChangeText={setNewAge}
        keyboardType="numeric"
      />

      <Button
        title="Cập nhật cho cha"
        onPress={() => onUpdate(newName, newAge)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
  },
});
