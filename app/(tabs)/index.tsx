import { Link } from "expo-router";
import { Text, View, } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-slate-900 "
    >
      <Text className="text-white text-lg text-wrap">Index page / Home</Text>
      <Link href="/movies/1">
        <Text className="text-blue-500">Go to Movie 1</Text>
      </Link>

    </View>
  );
}
