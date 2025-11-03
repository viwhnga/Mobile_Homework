import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ChildComponent from './Child';

export default function MainComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Hàm cập nhật từ con gửi lên
  const handleUpdateFromChild = (newName, newAge) => {
    setName(newName);
    setAge(newAge);
  };

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

      {/* Gửi dữ liệu sang con */}
      <ChildComponent name={name} age={age} onUpdate={handleUpdateFromChild} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});
