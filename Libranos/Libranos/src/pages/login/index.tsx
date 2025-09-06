import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    Pressable
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/LIBRANOS.png";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../../App";

type NavigationProp = StackNavigationProp<RootStackParamList, "Login">;

export default function Login (){
     const navigation = useNavigation<NavigationProp>();
    return (
      
        <View style={style.container}>


            <View style={style.boxTop }>
                <Text style={style.text}>Libranos</Text>
                <Text style={style.text2}>Libras na palma da sua mão</Text>
                <Image  
                source={Logo}
                style={style.imagem}
                resizeMode="contain"
                />
            </View>

            <View style={style.inputBox}>
                    <TextInput style={style.inputText} 
                        placeholder="E-mail"
                        />
            </View>
                
            <View style={style.inputBox}>
                    <TextInput style={style.inputText} 
                        placeholder="Senha"
                        secureTextEntry 
                    />
            </View>
            
            <Pressable style={({ pressed }) => 
                [style.buttomBox,pressed && style.buttomPressed]}
                onPress={() => console.log("Entrar clicado!")}>
                <Text style={style.buttomText}>Entrar</Text>
            </Pressable>   

            <Pressable style={({ pressed }) => 
            [style.buttomBox,pressed && style.buttomPressed]}
            onPress={() => navigation.navigate("Cadastro")}>
                <Text style={style.buttomText}>Cadastrar</Text>
            </Pressable>  

        </View>
    )
}