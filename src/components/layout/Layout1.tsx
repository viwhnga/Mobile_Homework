import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Layout1() {
  return (
    <View style={styles.container}>
      {/* --- Header --- */}
      <View style={styles.header}>
        <Text style={styles.headerText}> Header</Text>
      </View>

      {/* --- Content --- */}
      <View style={styles.content}>
        <Text style={styles.contentText}>
         Content
        </Text>
      </View>

      {/* --- Footer --- */}
      <View style={styles.footer}>
        <Text style={styles.footerText}> Footer</Text>
      </View>
    </View>
  );
}

// --- STYLE ---
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f1f5f9',
    flexDirection: 'row',
  },

  // --- Header ---
  header: {
    backgroundColor: '#3b82f6',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  // --- Content ---
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  contentTextSmall: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
  },

  // --- Footer ---
  footer: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '500',
  },
});
