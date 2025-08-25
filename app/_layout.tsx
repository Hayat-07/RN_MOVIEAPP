import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return <SafeAreaView style={{ flex: 1, }}  >
    <Stack >
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
  </Stack>
  </SafeAreaView>;
}
