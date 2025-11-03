import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  RadioButton,
  Divider,
} from 'react-native-paper';

export default function Calculator() {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  // --- Hàm tính toán ---
  const handleCalculate = () => {
    const a = parseFloat(numA);
    const b = parseFloat(numB);

    if (isNaN(a) || isNaN(b)) {
      Alert.alert('Lỗi', 'Vui lòng nhập số hợp lệ!');
      return;
    }
    if (operator === '') {
      Alert.alert('Lỗi', 'Vui lòng chọn phép toán!');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '×':
        res = a * b;
        break;
      case '÷':
        if (b === 0) {
          Alert.alert('Lỗi', 'Không thể chia cho 0!');
          return;
        }
        res = a / b;
        break;
      case 'cmp':
        if (a > b) res = `${a} > ${b}`;
        else if (a < b) res = `${a} < ${b}`;
        else res = `${a} = ${b}`;
        setResult(res);
        return;
      default:
        res = 0;
    }

    const rounded = Math.round(res * 100) / 100;
    setResult(rounded.toString());
  };

  // --- Hàm xóa tất cả ---
  const handleClear = () => {
    setNumA('');
    setNumB('');
    setOperator('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bảng tính đơn giản</Text>

      <TextInput
        label="Nhập số A"
        value={numA}
        onChangeText={setNumA}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Nhập số B"
        value={numB}
        onChangeText={setNumB}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />

      <Text style={styles.subtitle}>Chọn phép toán:</Text>
      <RadioButton.Group onValueChange={setOperator} value={operator}>
        <View style={styles.radioRow}>
          <RadioButton.Item label="Cộng" value="+" />
          <RadioButton.Item label="Trừ" value="-" />
        </View>
        <View style={styles.radioRow}>
          <RadioButton.Item label="Nhân" value="×" />
          <RadioButton.Item label="Chia" value="÷" />
        </View>
        <View style={styles.radioRow}>
          <RadioButton.Item label="So sánh" value="cmp" />
        </View>
      </RadioButton.Group>

      <Divider style={{ marginVertical: 10 }} />

      <View style={styles.buttonRow}>
        <Button
          mode="contained"
          onPress={handleCalculate}
          buttonColor="#10b981"
          style={styles.button}>
          Tính
        </Button>
        <Button
          mode="outlined"
          onPress={handleClear}
          textColor="#ef4444"
          style={styles.button}>
          Xóa tất cả
        </Button>
      </View>

      {result !== '' && <Text style={styles.result}>Kết quả: {result}</Text>}
    </View>
  );
}

// --- Style ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e293b',
  },
  input: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});

// kiểm tra tính hợp lệ của số nhập vào, tránh lỗi khi người dùng nhập chữ hoặc để trống