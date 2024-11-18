import { Text, StyleSheet, View } from 'react-native';
import { colors } from '../styles';

type ProductProps = {
  name: string;
  quantity: number;
  unit: 'kg' | 'l' | 'un';
};

export function Product(props: ProductProps) {
  const unitLabelMapping = {
    kg: 'Quilo',
    l: 'Litro',
    un: 'Unidade'
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{props.name}</Text>
      <Text style={{color: 'white'}}>
        {props.quantity} {unitLabelMapping[props.unit]}{props.quantity > 1 ? 's' : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8
  }
});
