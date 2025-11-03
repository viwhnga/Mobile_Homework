import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
} from 'react-native';

// 🩷 Kiểu dữ liệu
type Product = {
  id: number;
  name: string;
  price: string;
  image: ImageSourcePropType;
};

// 🩷 Component con
function ProductCard({ name, price, image }: Product) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🩷 Component chính
export default function HomeScreen2() {
  const products: Product[] = [
    { id: 1, name: 'Váy Hoa Mùa Hè', price: '320.000₫', image: require('../../assets/1.jpg') },
    { id: 2, name: 'Set váy trắng sinh nhật', price: '250.000₫', image: require('../../assets/2.jpg') },
    { id: 3, name: 'Túi Xách Mini', price: '450.000₫', image: require('../../assets/3.jpg') },
    { id: 4, name: 'Giày Búp Bê', price: '370.000₫', image: require('../../assets/4.jpg') },
    { id: 5, name: 'Áo Khoác Dáng Dài', price: '590.000₫', image: require('../../assets/5.jpg') },
    { id: 6, name: 'Nón Len Hồng', price: '120.000₫', image: require('../../assets/6.jpg') },
    { id: 7, name: 'Áo Thun Cute', price: '190.000₫', image: require('../../assets/7.jpg') },
    { id: 8, name: 'Váy Dạ Tiệc', price: '680.000₫', image: require('../../assets/8.jpg') },
    { id: 9, name: 'Váy Xoè Hồng', price: '220.000₫', image: require('../../assets/9.jpg') },
    // { id: 10, name: 'Váy Dạ Hội', price: '990.000₫', image: require('../../assets/10.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💖 MyPink Store 💖</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard name={item.name} 
                      price={item.price} 
                      image={item.image} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // 👈 Hiển thị 3 cột
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e91e63',
    marginVertical: 20,
    letterSpacing: 1,
  },
  grid: {
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#e91e63',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
    color: '#333',
  },
  price: {
    fontSize: 12,
    color: '#d81b60',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#f06292',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
