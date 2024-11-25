import { FlatList, StyleSheet } from 'react-native';
import { categories } from '../data/categories';
import { Category } from './category';

type CategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: (title: string) => void;
};

export function Categories({selectedCategory, setSelectedCategory}: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <Category
          title={item.title}
          icon={item.icon}
          isSelected={item.title === selectedCategory}
          onPress={() => setSelectedCategory(item.title)}
        />
      )}
      style={styles.container}
      horizontal
      contentContainerStyle={styles.content}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 52
  },
  content: {
    paddingHorizontal: 16,
    gap: 16
  }
});
