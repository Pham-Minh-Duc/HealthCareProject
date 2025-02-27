import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>This is the homePage Screen!</Text>
      <Button title="quay lại" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({

});
