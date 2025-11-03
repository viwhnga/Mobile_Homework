import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [advice, setAdvice] = useState('');
  const [status, setStatus] = useState(''); // thin, normal, over, obese

  // --- Xử lý tính toán ---
  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setAdvice('❌ Vui lòng nhập chiều cao và cân nặng hợp lệ!');
      setBmi(null);
      setStatus('');
      return;
    }

    const bmiValue = w / Math.pow(h / 100, 2);
    const rounded = Math.round(bmiValue * 100) / 100;
    setBmi(rounded);

    if (rounded < 18.5) {
      setAdvice('⚠️ Bạn đang thiếu cân. Hãy ăn uống đầy đủ và tập luyện nhẹ nhàng.');
      setStatus('thin');
    } else if (rounded < 24.9) {
      setAdvice('✅ Cân nặng lý tưởng! Hãy duy trì chế độ sống lành mạnh nhé.');
      setStatus('normal');
    } else if (rounded < 29.9) {
      setAdvice(
        '🍔 Hơi thừa cân. Hãy điều chỉnh chế độ ăn và tập thể dục thường xuyên.',
      );
      setStatus('over');
    } else {
      setAdvice(
        '🚨 Béo phì! Nên gặp chuyên gia dinh dưỡng để được tư vấn cụ thể.',
      );
      setStatus('obese');
    }
  };

  const handleClear = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setAdvice('');
    setStatus('');
  };

  // --- Đổi màu nền và hình ảnh theo trạng thái ---
  const getBackgroundColor = () => {
    switch (status) {
      case 'thin':
        return '#fef9c3'; // vàng nhạt
      case 'normal':
        return '#dcfce7'; // xanh nhạt
      case 'over':
        return '#fee2e2'; // hồng nhạt
      case 'obese':
        return '#fca5a5'; // đỏ nhạt
      default:
        return '#f1f5f9'; // xám nhạt
    }
  };

  const getImageUrl = () => {
    switch (status) {
      case 'thin':
        return 'https://cdn-icons-png.flaticon.com/512/4149/4149954.png';
      case 'normal':
        return 'https://cdn-icons-png.flaticon.com/512/4149/4149945.png';
      case 'over':
        return 'https://cdn-icons-png.flaticon.com/512/4149/4149935.png';
      case 'obese':
        return 'https://cdn-icons-png.flaticon.com/512/4149/4149923.png';
      default:
        return '';
    }
  };

  const resultImage = getImageUrl();

  return (
    <View style={[styles.container, {backgroundColor: getBackgroundColor()}]}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>💪 Ứng dụng tính chỉ số BMI</Title>

          <TextInput
            label="Chiều cao (cm)"
            mode="outlined"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
            style={styles.input}
          />

          <TextInput
            label="Cân nặng (kg)"
            mode="outlined"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            style={styles.input}
          />

          <View style={styles.buttonGroup}>
            <Button
              mode="contained"
              onPress={handleCalculate}
              style={styles.button}
              buttonColor="#4ade80">
              Tính BMI
            </Button>
            <Button
              mode="outlined"
              onPress={handleClear}
              textColor="#ef4444"
              style={styles.button}>
              Xóa tất cả
            </Button>
          </View>

          {bmi && (
            <Card style={styles.resultCard}>
              <Card.Content>
                <Text style={styles.resultText}>📊 BMI của bạn: {bmi}</Text>
                <Paragraph style={styles.advice}>{advice}</Paragraph>

                {resultImage ? (
                  <Image
                    source={{uri: resultImage}}
                    style={styles.image}
                    resizeMode="contain"
                  />
                ) : null}
              </Card.Content>
            </Card>
          )}

          {advice && !bmi && (
            <Paragraph style={styles.error}>{advice}</Paragraph>
          )}
        </Card.Content>
      </Card>
    </View>
  );
}

// --- STYLE ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e293b',
  },
  input: {
    marginBottom: 12,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  resultCard: {
    marginTop: 16,
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 8,
  },
  advice: {
    fontSize: 16,
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  error: {
    color: '#dc2626',
    textAlign: 'center',
    marginTop: 10,
  },
});
