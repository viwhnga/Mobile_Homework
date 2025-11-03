import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Phuongtrinh() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const solveEquation = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult(' Vui lòng nhập số hợp lệ!');
      return;
    }

    if (numA === 0 && numB === 0) {
      setResult('Phương trình có vô số nghiệm');
    } else if (numA === 0 && numB !== 0) {
      setResult('Phương trình vô nghiệm');
    } else {
      const x = -numB / numA;
      const rounded = x.toFixed(3);
      setResult(`Nghiệm x = ${rounded}`);
    }
  };

  const clearFields = () => {
    setA('');
    setB('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc nhất</Text>
      <Text style={styles.subtitle}>Dạng: ax + b = 0</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        value={a}
        onChangeText={setA}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        value={b}
        onChangeText={setB}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Giải" onPress={solveEquation} color="#2b6cb0" />
        <View style={{width: 10}} />
        <Button title="Xóa" onPress={clearFields} color="#999" />
      </View>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2b6cb0',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  result: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
