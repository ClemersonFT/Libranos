import React, { useState } from "react";

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
import Sinal from "../../assets/Mao1.png"
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../../App";

type NavigationProp = StackNavigationProp<RootStackParamList, "Numeros">;



export default function Alfabeto (){
  
    const navigation = useNavigation<NavigationProp>();

    const [selecionado, setSelecionado] = useState<number | null>(null);

    const opcoes = [1, 7, 10, 2];

    return (
        <View style={style.container}>
        
        <View style={style.boxTop}>
            <Pressable
            style={({ pressed }) => [style.voltar, pressed && style.voltarPressed]}
            onPress={() => navigation.navigate("Modulo")}
            >
            <Image source={Ceta} style={style.ceta} />
            </Pressable>

            <Image source={Logo} style={style.logo} resizeMode="contain" />
        </View>


        <View style={style.boxMid}>
            <Text style={style.titulo}>Números</Text>

            <View style={style.texto2}>
                <Text style={style.enunciado}>Qual número esse sinal representa?</Text>

                <Image
                    source={Sinal}
                    style={[style.sinal, { tintColor: "#7bb9dc" }]} 
                    resizeMode="contain"
                />
            </View>


            <View style={style.respostas}>
                {opcoes.map((num, index) => {
                const ativo = selecionado === index;
                return (
                    <Pressable
                        key={index}
                        style={[style.carta, ativo && style.cartaAtiva]}
                        onPress={() => setSelecionado(index)}
                        >
                        <Text style={style.textoCarta}>{num}</Text>
                    </Pressable>
                    );
                })}
            </View>
        </View>
        <View style={style.boxBottom}>
            <Pressable
                style={({ pressed }) => [
                style.buttomBox,
                pressed && style.buttomPressed,
                selecionado === null && style.botaoDesativado,
                ]}
                disabled={selecionado === null}
                onPress={() => navigation.navigate("Modulo")}
                >
                <Text style={style.buttomText}>Continuar</Text>
            </Pressable>
        </View>


        </View>
    )
}


