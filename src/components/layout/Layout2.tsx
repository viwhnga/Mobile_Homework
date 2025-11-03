import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Layout2() {
  return (
    <View style={styles.container}>
      {/* Dòng 1 */}
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#f87171' }]}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#fb923c' }]}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#facc15' }]}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      {/* Dòng 2 */}
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#4ade80' }]}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#38bdf8' }]}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#818cf8' }]}>
          <Text style={styles.text}>6</Text>
        </View>
      </View>

      {/* Dòng 3 */}
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#c084fc' }]}>
          <Text style={styles.text}>7</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#f472b6' }]}>
          <Text style={styles.text}>8</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#a3a3a3' }]}>
          <Text style={styles.text}>9</Text>
        </View>
      </View>
    </View>
  );
}

// --- STYLE ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 120,
    height: 270,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // tạo bóng nhẹ cho đẹp
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
