import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AlertName from './AlertName';

export default function AlertMain() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      {/* Nhập tên */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tên..."
        value={name}
        onChangeText={setName}
      />

      {/* Nhập tuổi */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi..."
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      {/* Truyền state xuống AlertName qua props */}
      <AlertName name={name} age={age} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
});
