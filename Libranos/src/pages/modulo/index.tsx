import React from "react";

import { 
  View,
  Text,
  Image, 
  Pressable
}from "react-native";

import { style } from "./styles";
import Logo from "../../assets/LIBRANOS.png";
import Ceta from "../../assets/Ceta.png";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../../App";

type NavigationProp = StackNavigationProp<RootStackParamList, "Modulo">;
type StepProps = { icon?: any; label: string; onPress?: () => void };

const Step = ({ icon, label, onPress }: StepProps) => (
    <Pressable onPress={onPress} style={style.stepBox}>
    <View style={style.stepCircle}>
      {icon ? (
        <Image source={icon} style={style.stepIcon} resizeMode="contain"/>
      ) : (
        <View style={style.stepPlaceholder} />
      )}
    </View>
    <Text style={style.label}>{label}</Text>
  </Pressable>
);
  

export default function Modulos() {
  const steps = [
    { icon: require("../../assets/mao_aberta.png"), label: "Introdução"},
    { icon: require("../../assets/mao_c.png"), label: "Alfabeto", screen: "Alfabeto" },
    { icon: require("../../assets/mao_3.png"), label: "Números", screen: "Numeros" },
    { icon: require("../../assets/mao_fechada.png"), label: "Cumprimentos" },
  ];

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Pressable
          style={({ pressed }) => [style.voltar, pressed && style.voltarPressed]}
          onPress={() => navigation.navigate("Login")}>
          {({ pressed }) => (
            <Image source={Ceta} style={style.ceta} />
          )}
        </Pressable>
        <Image  
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={style.title}>Módulo I</Text>

      <View style={style.stepsContainer}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <Step
              icon={s.icon}
              label={s.label}
              onPress={s.screen ? () => navigation.navigate(s.screen as keyof RootStackParamList) : undefined}
            />
            {i < steps.length - 1 && <View style={style.lineDashed} />}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}
