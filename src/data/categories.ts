import { MaterialCommunityIcons } from '@expo/vector-icons';

type Category = {
  id: number;
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const categories: Category[] = [
  { id: 1,  title: 'Frutas',    icon: 'fruit-grapes' },
  { id: 2,  title: 'Carnes',    icon: 'cow' },
  { id: 3,  title: 'Bebidas',   icon: 'cup' },
  { id: 4,  title: 'Limpeza',   icon: 'bottle-tonic-skull' },
  { id: 5,  title: 'Padaria',   icon: 'bread-slice' },
];
