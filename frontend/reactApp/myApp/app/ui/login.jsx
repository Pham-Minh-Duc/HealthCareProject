import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function DetailScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the login Screen!</Text>
      <Button title="quay lại" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 300, height: 500 , border: 'solid' },
  text: { fontSize: 20, fontWeight: "bold" , color: "green"},
});
