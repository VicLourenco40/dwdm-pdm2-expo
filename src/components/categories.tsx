import { FlatList, StyleSheet } from 'react-native';
import { categories } from '../data/categories';
import { Category } from './category';

type CategoriesProps = {
  category: string,
  setCategory: (title: string) => void
}

export function Categories({category, setCategory}: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <Category
          title={item.title}
          isSelected={item.title === category}
          onPress={() => setCategory(item.title)}
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
    paddingHorizontal: 24,
    gap: 16
  }
});
