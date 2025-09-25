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
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../../App";

type NavigationProp = StackNavigationProp<RootStackParamList, "Alfabeto">;



export default function Alfabeto (){
  
  const navigation = useNavigation<NavigationProp>();

  const [selecionado, setSelecionado] = useState<number | null>(null);

  const sinais = [
    require("../../assets/Hangloose.png"),
    require("../../assets/L.png"),
    require("../../assets/A.png"),
    require("../../assets/figuinha.png"),
  ];

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
        <Text style={style.titulo}>Alfabeto</Text>

        <View style={style.texto2}>
          <Text style={style.enunciado}>Qual é o sinal que representa a letra A?</Text>
        </View>


        <View style={style.respostas}>
          {sinais.map((src, index) => {
            const ativo = selecionado === index;
            return (
              <Pressable
                key={index}
                style={[style.carta, ativo && style.cartaAtiva]}
                onPress={() => setSelecionado(index)}
              >
                <Image source={src} style={style.image} resizeMode="contain" />
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


