import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    Pressable
}from "react-native";

import { style } from "./styles";
import Logo from "../../assets/LIBRANOS.png"
import Ceta from "../../assets/Ceta.png"
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../../App";

type NavigationProp = StackNavigationProp<RootStackParamList, "Cadastro">;

export default function Cadastro (){
    const navigation = useNavigation<NavigationProp>();
    return(
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
                    <TextInput style={style.inputText} 
                    placeholder="Nome completo"
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
                    />
                </View>

                <View style={style.inputBox}>
                    <TextInput style={style.inputText} 
                    placeholder="Confirmar senha"
                    />
                </View>


            </View>     

            <View style={style.boxBottom}>

                <Pressable style={({ pressed }) => 
                    [style.buttomBox,pressed && style.buttomPressed]}
                    onPress={() => navigation.navigate("Modulo")}>
                    <Text style={style.buttomText}>Cadastrar</Text>
                </Pressable>  

            </View>        
        </View>
    )
}


