import { Text, StyleSheet, Pressable, PressableProps } from 'react-native';
import { colors } from '../styles';

type CategoryProps = PressableProps & {
  title: string,
  isSelected: boolean
}

export function Category({title, isSelected, ...rest}: CategoryProps) {
  const color = isSelected ? colors.blue[400] : colors.gray[400];

  return (
    <Pressable {...rest}>
      <Text style={[styles.title, {color}]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '700',
  }
});
