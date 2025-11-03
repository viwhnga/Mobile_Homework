import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

type Student = {
  id: number;
  name: string;
  age: number;
  grade: number;
};

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'An', age: 17, grade: 7.5 },
    { id: 2, name: 'Bình', age: 18, grade: 8.2 },
    { id: 3, name: 'Chi', age: 19, grade: 9.0 },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
//   const [editingId, setEditingId] = useState<number | null>(null);

  const addStudent = () => {
    if (!name || !age || !grade) return;
    const newStudent: Student = {
      id: students.length + 1,
      name,
      age: Number(age),
      grade: Number(grade),
    };
    setStudents([...students, newStudent]);
    setName('');
    setAge('');
    setGrade('');
  };

  const startEdit = (id: number) => setEditingId(id);

  const saveEdit = (id: number, newName: string, newGrade: string) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, name: newName, grade: Number(newGrade) } : s
    ));
    setEditingId(null);
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📘 Danh sách học sinh</Text>

      {/* Form thêm */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Tên"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Tuổi"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Điểm"
          value={grade}
          onChangeText={setGrade}
          keyboardType="numeric"
        />
        <Button title="Thêm học sinh" onPress={addStudent} />
      </View>

      {/* Danh sách học sinh */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {editingId === item.id ? (
              <EditForm
                student={item}
                onSave={saveEdit}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>
                  {item.id}. {item.name} — Tuổi: {item.age} — Điểm: {item.grade}
                </Text>
                <View style={styles.btnRow}>
                  <Button title="Sửa" onPress={() => startEdit(item.id)} />
                  <Button title="Xoá" onPress={() => deleteStudent(item.id)} />
                </View>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

const EditForm = ({ student, onSave, onCancel }: any) => {
  const [newName, setNewName] = useState(student.name);
  const [newGrade, setNewGrade] = useState(String(student.grade));
  return (
    <View style={{ flex: 1 }}>
      <TextInput style={styles.input} value={newName} onChangeText={setNewName} />
      <TextInput
        style={styles.input}
        value={newGrade}
        onChangeText={setNewGrade}
        keyboardType="numeric"
      />
      <View style={styles.btnRow}>
        <Button title="Lưu" onPress={() => onSave(student.id, newName, newGrade)} />
        <Button title="Huỷ" onPress={onCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  form: { marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 8,
    marginBottom: 6,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  text: { fontSize: 16 },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
  },
});
function setEditingId(id: number) {
    throw new Error('Function not implemented.');
}

