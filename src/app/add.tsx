import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles';
import { Categories } from '../components/categories';
import { Input } from '../components/input';

export default function Add() {
  const [category, setCategory] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name='chevron-left'
            size={24}
            color={colors.blue[400]}
          />
        </Pressable>
      </View>
      <View style={styles.form}>
        <View style={styles.section}>
          <View>
            <Text style={styles.sectionTitle}>Category</Text>
            <Text style={styles.sectionSubtitle}>Select a category</Text>
          </View>
          <Categories
            selectedCategory={category}
            setSelectedCategory={setCategory}
          />
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.sectionTitle}>Item info</Text>
            <Text style={styles.sectionSubtitle}>Fill out item info</Text>
          </View>
          <View>
            <Text style={styles.sectionSubtitle}>Name</Text>
            <Input placeholder='Item name'/>
          </View>
          <View>
            <Text style={styles.sectionSubtitle}>Quantity</Text>
            <Input keyboardType='numeric' placeholder='Item quantity' />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 16 : 0
  },
  header: {
    paddingLeft: 16
  },
  form: {
    flex: 1,
    padding: 16,
    gap: 16
  },
  section: {
    gap: 16
  },
  sectionTitle: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: 'bold'
  },
  sectionSubtitle: {
    color: colors.gray[400],
    fontSize: 14,
    fontWeight: 'medium'
  }
});
