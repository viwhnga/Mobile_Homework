import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';

type Student = {
  id: number;
  name: string;
  age: number;
  grade: number;
};

/**
 * StudentManager.tsx
 * - Hiển thị danh sách học sinh (mảng khởi tạo >=5 học sinh)
 * - Thêm / Sửa / Xóa (confirm)
 * - STT, nút Sửa & Xóa mỗi dòng
 * - Sắp xếp theo grade giảm dần (toggle)
 * - Lọc học sinh có điểm >= 8 (toggle)
 * - Tìm kiếm theo tên (search)
 *
 * Lưu ý: file này dùng TypeScript/React Native.
 */

export default function StudentList23pnv1a() {
  // 1) Dữ liệu khởi tạo (ít nhất 5 học sinh)
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Hằng', age: 18, grade: 8.5 },
    { id: 2, name: 'Hồng', age: 20, grade: 7.5 },
    { id: 3, name: 'Đông', age: 19, grade: 9.0 },
    { id: 4, name: 'Đạt Cá', age: 18, grade: 6.5 },
    { id: 5, name: 'Tiên', age: 21, grade: 8.8 },
  ]);

  // Form state
  const [name, setName] = useState('');
  const [age, setAge] = useState(''); // giữ string để dùng TextInput dễ
  const [grade, setGrade] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // UI controls: search, sort toggle, filter toggle
  const [search, setSearch] = useState('');
  const [sortDesc, setSortDesc] = useState(true); // mặc định sắp xếp giảm dần
  const [filterHighGrade, setFilterHighGrade] = useState(false); // lọc >=8

  // -------------------------
  // Utility: reset form
  const resetForm = () => {
    setName('');
    setAge('');
    setGrade('');
    setEditingId(null);
  };

  // -------------------------
  // 4) Thêm sinh viên
  const handleAdd = () => {
    if (!name.trim() || !age.trim() || !grade.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    const newStudent: Student = {
      id: students.length ? Math.max(...students.map((s) => s.id)) + 1 : 1,
      name: name.trim(),
      age: Number(age),
      grade: Number(grade),
    };
    setStudents((prev) => [...prev, newStudent]);
    resetForm();
  };

  // 5) Sửa: bước 1 = chọn để sửa (đổ dữ liệu vào form)
  const handleChooseEdit = (s: Student) => {
    setName(s.name);
    setAge(String(s.age));
    setGrade(String(s.grade));
    setEditingId(s.id);
    // cuộn lên form nếu cần - tùy giao diện
  };

  // 5) Sửa: step 2 = submit sửa
  const handleEditSubmit = () => {
    if (editingId === null) return;
    if (!name.trim() || !age.trim() || !grade.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    setStudents((prev) =>
      prev.map((s) =>
        s.id === editingId ? { ...s, name: name.trim(), age: Number(age), grade: Number(grade) } : s
      )
    );
    resetForm();
  };

  // 6) Xóa với confirm
  const handleDelete = (id: number) => {
    Alert.alert('Xác nhận', 'Bạn có chắc muốn xóa học sinh này?', [
      { text: 'Hủy', style: 'cancel' },
      {
        text: 'Xóa',
        style: 'destructive',
        onPress: () => {
          setStudents((prev) => prev.filter((s) => s.id !== id));
          // nếu đang sửa record đó thì reset form
          if (editingId === id) resetForm();
        },
      },
    ]);
  };

  // 7) Sắp xếp: được xử lý trong useMemo để không mutate mảng gốc
  // 8) Lọc điểm >= 8: toggle filterHighGrade
  // 9) Tìm kiếm: dùng search
  const processedList = useMemo(() => {
    let list = [...students];

    // tìm kiếm
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q));
    }

    // lọc grade >= 8 nếu bật
    if (filterHighGrade) {
      list = list.filter((s) => s.grade >= 8);
    }

    // sắp xếp theo grade
    list.sort((a, b) => (sortDesc ? b.grade - a.grade : a.grade - b.grade));

    return list;
  }, [students, search, sortDesc, filterHighGrade]);

  // thêm 1 giá trị: số lượng có điểm >= 8 (tính từ danh sách gốc)
  const highGradeCount = students.filter((s) => s.grade >= 8).length;

  // Render item (mỗi dòng)
  const renderItem = ({ item, index }: { item: Student; index: number }) => {
    return (
      <View style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.itemText}>STT: {index + 1}</Text>
          <Text style={styles.itemText}>Tên: {item.name}</Text>
          <Text style={styles.itemText}>Tuổi: {item.age}</Text>
          <Text style={styles.itemText}>Điểm: {item.grade}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handleChooseEdit(item)} style={styles.actionBtn}>
            <Text>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionBtn}>
            <Text>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Quản lý danh sách học sinh</Text>

      {/* Bar: search + filter + sort */}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="🔍 Tìm kiếm theo tên"
          value={search}
          onChangeText={setSearch}
        />
        <View style={{ width: 10 }} />
        <TouchableOpacity
          style={[styles.toggleBtn, filterHighGrade ? styles.toggleOn : styles.toggleOff]}
          onPress={() => setFilterHighGrade((v) => !v)}
        >
          <Text>{filterHighGrade ? 'Lọc ≥8' : 'Tất cả'}</Text>
        </TouchableOpacity>
        <View style={{ width: 8 }} />
        <TouchableOpacity
          style={styles.toggleBtn}
          onPress={() => setSortDesc((v) => !v)}
        >
          <Text>{sortDesc ? 'Sắp xếp: Giảm' : 'Sắp xếp: Tăng'}</Text>
        </TouchableOpacity>
      </View>

      {/* Form thêm / sửa */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Tên học sinh"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Tuổi"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Điểm"
          keyboardType="numeric"
          value={grade}
          onChangeText={setGrade}
        />

        <View style={styles.formRow}>
          {editingId === null ? (
            <Button title="➕ Thêm học sinh" onPress={handleAdd} />
          ) : (
            <>
              <Button title="💾 Lưu thay đổi" onPress={handleEditSubmit} />
              <View style={{ width: 8 }} />
              <Button title="⟲ Hủy" onPress={resetForm} color="#888" />
            </>
          )}
        </View>
      </View>

      <Text style={styles.info}>Số học sinh (tổng): {students.length} — Điểm ≥8: {highGradeCount}</Text>

      {/* Danh sách */}
      <FlatList
        data={processedList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 12 }}>Không có dữ liệu</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 8,
    backgroundColor: '#fafafa',
  },
  toggleBtn: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleOn: { backgroundColor: '#dff0d8', borderColor: '#8bc34a' },
  toggleOff: { backgroundColor: '#fff', borderColor: '#ccc' },

  form: { marginVertical: 8 },
  formRow: { flexDirection: 'row', justifyContent: 'flex-start', marginTop: 6 },

  info: { marginVertical: 6, fontSize: 14 },

  item: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  itemText: { fontSize: 14 },
  actions: { justifyContent: 'center', alignItems: 'center', marginLeft: 8 },
  actionBtn: { padding: 6, marginVertical: 4 },
});
