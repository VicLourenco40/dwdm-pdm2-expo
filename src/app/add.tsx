import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Add() {
  return (
    <>
      <Pressable
        style={{marginTop: 40}}
        onPress={() => router.back()}
      >
        <Text style={{color: 'white'}}>Voltar</Text>

      </Pressable>
      <Text style={{color: 'white'}}>Novo item</Text>
    </>
  );
}
