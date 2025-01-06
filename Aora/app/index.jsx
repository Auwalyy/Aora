import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Aora</Text>
      <Link href="/profile" style={{color: "blue"}}>Go to profile</Link>
    </View>
  );
}
