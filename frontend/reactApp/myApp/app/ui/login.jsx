import {Alert, View, Text, Button, StyleSheet, ImageBackground, TextInput, Touchable, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function DetailScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                Alert.alert("Thành công", data.message);
            } else {
                setMessage("Đăng nhập thất bại");
                Alert.alert("Lỗi", data.message);
            }
        } catch (error) {
            Alert.alert("Lỗi", "Không thể kết nối đến server");
            console.error(error);
        }
    };

  return (
    <View style={styles.container}>
        <View style = {styles.login}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style = {styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style = {styles.input}
          />
          <TouchableOpacity onPress={() => router.back()}>
            <Text style = {styles.buttonLogin} onPress = {handleLogin}>Login</Text>
          </TouchableOpacity>
          <Button title="quay lại" onPress={() => router.back()} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", backgroundColor: "white"},
  loginText: { fontSize: 20, fontWeight: "bold" , color: "blue", fontSize: 50, paddingBottom: 40},
  login: {display: "flex", flexDirection: "column", alignItems:"center", width: "100%", height: "100%", paddingTop: 150},
  input: {width: 220, height: 40, borderColor: "black", padding: 10, borderWidth: 1, borderRadius: 10, margin: 10},
  buttonLogin: { color: "blue", borderWidth: 1, borderRadius: 5, paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, marginTop: 17}
});
