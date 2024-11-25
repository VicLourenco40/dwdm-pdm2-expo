import { Text, StyleSheet, Pressable, PressableProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles';

type CategoryProps = PressableProps & {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  isSelected: boolean;
};

export function Category({title, icon, isSelected, ...rest}: CategoryProps) {
  return (
    <Pressable {...rest} style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={16}
        style={
          isSelected ? styles.isSelected : styles.isNotSelected
        }
      />
      <Text
        style={[
          styles.title,
          isSelected ? styles.isSelected : styles.isNotSelected
        ]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '700'
  },
  isSelected: {
    color: colors.blue[400]
  },
  isNotSelected: {
    color: colors.gray[400]
  }
});
