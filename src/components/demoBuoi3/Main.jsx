import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Main() {
  // State của cha
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // Hàm cập nhật từ con (callback)
  const handleUpdateFromChild = (newName, newAge) => {
    setName(newName);
    setAge(newAge);
  };

  // Component con (viết gọn trong cùng file)
  const ChildComponent = ({ name, age, onUpdate }) => {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");

    return (
      <View style={styles.childContainer}>
        <Text style={styles.subtitle}> Component Con</Text>
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
  };

  // Giao diện cha
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Cha</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên..."
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi..."
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.text}>Tên: {name}</Text>
      <Text style={styles.text}>Tuổi: {age}</Text>

      {/* Gọi component con ngay trong file */}
      <ChildComponent name={name} age={age} onUpdate={handleUpdateFromChild} />
    </View>
  );
}

// CSS cơ bản
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    marginVertical: 3,
  },
  childContainer: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
  },
});
