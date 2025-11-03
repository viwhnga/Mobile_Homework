import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Contact = {
  id: number;
  name: string;
  phone: string;
};

export default function Danhba() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([
    {id: 1, name: 'Linh', phone: '353644634'},
    {id: 2, name: 'Hùng', phone: '35352515'},
  ]);
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  // 🟢 Hàm thêm mới
  const handleAdd = () => {
    if (!name || !phone) return;
    const newContact: Contact = {
      id: Date.now(),
      name,
      phone,
    };
    setContacts(prev => [...prev, newContact]);
    setName('');
    setPhone('');
  };

  // 🟡 Khi bấm nút sửa -> load dữ liệu vào ô input
  const handleEdit = (id: number) => {
    const contact = contacts.find(c => c.id === id);
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
      setEditId(id);
    }
  };

  // 🔵 Lưu sau khi sửa
  const handleSaveEdit = () => {
    if (editId === null) {
      return;
    }
    setContacts(prev =>
      prev.map(c => (c.id === editId ? {...c, name, phone} : c)),
    );
    setEditId(null);
    setName('');
    setPhone('');
  };

  // 🔴 Xóa
  const handleDelete = (id: number) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  // 🔍 Lọc theo tên
  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DANH BẠ</Text>

      <TextInput
        placeholder="Tên"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Số điện thoại"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Nút thêm hoặc lưu sửa */}
      {editId ? (
        <TouchableOpacity
          style={[styles.addBtn, {backgroundColor: '#ffb84d'}]}
          onPress={handleSaveEdit}>
          <Text style={styles.addText}>LƯU</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.addText}>THÊM</Text>
        </TouchableOpacity>
      )}

      <TextInput
        placeholder="Tìm kiếm..."
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Icon name="person-circle-outline" size={28} color="#ff66b3" />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
            <TouchableOpacity onPress={() => handleEdit(item.id)}>
              <Icon name="create-outline" size={22} color="#ffb84d" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Icon name="trash-outline" size={22} color="#ff4d4d" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff3399',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff99cc',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
  },
  addBtn: {
    backgroundColor: '#ff3399',
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  addText: {color: '#fff', fontWeight: 'bold'},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe6f0',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
  },
  name: {fontWeight: 'bold', fontSize: 16},
  phone: {color: 'gray'},
});
