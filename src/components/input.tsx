import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../styles";

export function Input({...rest}: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.gray[400]}
      style={styles.container}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    color: colors.gray[100],
    backgroundColor: colors.gray[900],
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 8,
    padding: 8
  }
});
