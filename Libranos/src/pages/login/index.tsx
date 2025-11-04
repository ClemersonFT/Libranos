import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { login } from "../../service/loginService";
import { style } from "./styles";
import Logo from "../../assets/LIBRANOS.png";
import type { RootStackParamList } from "../../../App";

type NavigationProp = StackNavigationProp<RootStackParamList, "Login">;

export default function Login() {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha email e senha!");
            return;
        }

        setLoading(true);
        try {
            const response = await login(email, password);
            await AsyncStorage.setItem("token", response.data.token);
            Alert.alert("Sucesso", "Login realizado com sucesso!");
            navigation.navigate("Modulo"); // página pós-login
        } catch (error: any) {
            Alert.alert("Erro", error.message || "Falha no login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.text}>Libranos</Text>
                <Text style={style.text2}>Libras na palma da sua mão</Text>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
            </View>

            <View style={style.inputBox}>
                <TextInput
                    style={style.inputText}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
            </View>

            <View style={style.inputBox}>
                <TextInput
                    style={style.inputText}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Pressable
                style={({ pressed }) => [style.buttomBox, pressed && style.buttomPressed]}
                onPress={handleLogin}
            >
                <Text style={style.buttomText}>{loading ? "Entrando..." : "Entrar"}</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [style.buttomBox, pressed && style.buttomPressed]}
                onPress={() => navigation.navigate("Cadastro")}
            >
                <Text style={style.buttomText}>Cadastrar</Text>
            </Pressable>
        </View>
    );
}
