import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    Pressable
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/LIBRANOS.png"
import Ceta from "../../assets/Ceta.png"
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../../App";
import { register } from "../../service/loginService";

type NavigationProp = StackNavigationProp<RootStackParamList, "Cadastro">;

interface RegisterRecord {
    fullName: string;
    email: string;
    password: string;
}

export default function Cadastro() {
    const navigation = useNavigation<NavigationProp>();
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [registerRecord, setRegisterRecord] = React.useState<RegisterRecord>({
        fullName: "",
        email: "",
        password: ""
    });

    const handleRegister = async () => {
        try {
            const response = await register(registerRecord);

            if (response.status === 200) {
                navigation.navigate("Login");
                setRegisterRecord({
                    fullName: "",
                    email: "",
                    password: ""
                });
                setConfirmPassword("");
            }
        } catch (error: any) {
            console.error("Registration failed: ", error);
        }
    };

    const isValid = (): boolean => {
        return (registerRecord.fullName.length > 0 &&
            registerRecord.email.length > 0 &&
            registerRecord.password.length > 0 &&
            registerRecord.password === confirmPassword
        );
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Pressable
                    style={({ pressed }) => [style.voltar,
                    pressed && style.voltarPressed,
                    ]}
                    onPress={() => navigation.navigate("Login")}>
                    {({ pressed }) => (
                        <Image
                            source={Ceta}
                            style={[
                                style.ceta,
                            ]}
                        />
                    )}
                </Pressable>
                <Text style={style.text}>Libranos</Text>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={style.boxMid}>
                <View style={style.inputBox}>
                    <TextInput value={registerRecord.fullName} onChangeText={(text) => setRegisterRecord({ ...registerRecord, fullName: text })} style={style.inputText}
                        placeholder="Nome completo"
                    />
                </View>

                <View style={style.inputBox}>
                    <TextInput value={registerRecord.email} onChangeText={(text) => setRegisterRecord({ ...registerRecord, email: text })} style={style.inputText}
                        placeholder="E-mail"
                    />
                </View>

                <View style={style.inputBox}>
                    <TextInput value={registerRecord.password} onChangeText={(text) => setRegisterRecord({ ...registerRecord, password: text })} style={style.inputText}
                        placeholder="Senha"
                    />
                </View>

                <View style={style.inputBox}>
                    <TextInput value={confirmPassword} onChangeText={setConfirmPassword} style={style.inputText}
                        placeholder="Confirmar senha"
                    />
                </View>


            </View>

            <View style={style.boxBottom}>

                <Pressable disabled={!isValid()} style={({ pressed }) =>
                    [style.buttomBox, pressed && style.buttomPressed]}
                    onPress={() => handleRegister()}>
                    <Text style={style.buttomText}>Cadastrar</Text>
                </Pressable>

            </View>
        </View>
    )
}


