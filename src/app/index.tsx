import { useState } from 'react';
import { View, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import Icon from '../assets/icon.png';
import { Categories } from '../components/categories';
import { Product } from '../components/product';
import { router } from 'expo-router';

type Item = {
  id: number;
  name: string;
  quantity: number;
  category: string;
  unit: 'kg' | 'l' | 'un';
};

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: 'Maçãs',
      quantity: 3,
      category: 'Frutas',
      unit: 'kg'
    },
    {
      id: 2,
      name: 'Coca-Cola',
      quantity: 1,
      category: 'Bebidas',
      unit: 'l'
    }
  ]);

  const filteredItems = items.filter(item => {
    return item.category === selectedCategory;
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Icon} style={styles.logo} />
        <Pressable onPress={() => router.navigate('/add')}>
          <Entypo name='plus' size={24} color='white' />
        </Pressable>
      </View>
      <Categories category={selectedCategory} setCategory={setSelectedCategory} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={filteredItems}
        renderItem={({item}) => (
          <Product
            name={item.name}
            quantity={item.quantity}
            unit={item.unit}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 64,
    height: 64
  }
});
