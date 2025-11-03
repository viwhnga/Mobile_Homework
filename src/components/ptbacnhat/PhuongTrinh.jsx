import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function PhuongTrinh() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const inputARef = useRef(null);
  const inputBRef = useRef(null);

  const solveEquation = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (a.trim() === '' || isNaN(numA)) {
      setResult('⚠️ Vui lòng nhập hệ số a hợp lệ!');
      setA('');
      inputARef.current?.focus();
      return;
    }

    if (b.trim() === '' || isNaN(numB)) {
      setResult('⚠️ Vui lòng nhập hệ số b hợp lệ!');
      setB('');
      inputBRef.current?.focus();
      return;
    }

    if (numA === 0 && numB === 0) {
      setResult('Phương trình có vô số nghiệm');
      return;
    }

    if (numA === 0 && numB !== 0) {
      setResult('Phương trình vô nghiệm');
      return;
    }

    const x = -numB / numA;
    setResult(`✅ Nghiệm x = ${x.toFixed(3)}`);
  };

  const clearAll = () => {
    setA('');
    setB('');
    setResult('');
    inputARef.current?.focus(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc nhất</Text>
      <Text style={styles.subtitle}>Dạng: ax + b = 0</Text>

      <TextInput
        ref={inputARef}
        style={styles.input}
        placeholder="Nhập hệ số a"
        value={a}
        onChangeText={setA}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => inputBRef.current?.focus()}
      />

      <TextInput
        ref={inputBRef}
        style={styles.input}
        placeholder="Nhập hệ số b"
        value={b}
        onChangeText={setB}
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={solveEquation}
      />

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Button title="Giải" color="#ff4d6d" onPress={solveEquation} />
        </View>
        <View style={styles.button}>
          <Button title="Xóa" color="#888" onPress={clearAll} />
        </View>
      </View>

      {result !== '' && (
        <Text
          style={[
            styles.result,
            result.includes('')
              ? { color: '#e63946' } // màu đỏ khi lỗi
              : { color: '#2a9d8f' }, // màu xanh khi hợp lệ
          ]}>
          {result}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff4d6d',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ffc0cb',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  result: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
