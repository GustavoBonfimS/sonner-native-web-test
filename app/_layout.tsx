import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Toaster } from '~/lib/Sonner';
import '../global.css';

export default function Layout() {
  return (
    <View className="flex-1">
      <Toaster />
      <Stack />
    </View>
  );
}
