import React from "react";
import { useState } from "react";

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
import {registro} from "../../services/loginService"

type NavigationProp = StackNavigationProp<RootStackParamList, "Cadastro">;

interface record{ 
    email:string,
    password:string,
    fullName:string
}

export default function Cadastro (){
    const navigation = useNavigation<NavigationProp>();
    const [registroRecord, setRegistro] = useState<record>({
        email: "",
        password: "",
        fullName: "",
    });

     const signup = async (usuarioRecord) => {
      try {
        const resp = await registro(usuarioRecord);
        if (resp.status == 200){
            navigation.navigate("Modulo")
        }
      } catch (error) {
        console.error(error);
      }
    }
    
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
                <View>
                    <TextInput
                        value={registroRecord.fullName}
                        style={style.inputText}
                        placeholder="Nome completo"
                        onChangeText={(text) => setRegistro({ ...registroRecord, fullName: text })}
                        />
                </View>

                <View style={style.inputBox}>
                    <TextInput 
                    value={registroRecord.email}
                    style={style.inputText} 
                    placeholder="E-mail"
                    onChangeText={(text) => setRegistro({ ...registroRecord, email: text })}
                    />
                </View>

                <View style={style.inputBox}>
                    <TextInput 
                    value={registroRecord.password}
                    style={style.inputText} 
                    placeholder="Senha"
                    onChangeText={(text) => setRegistro({ ...registroRecord, password: text })}
                    />
                </View>

                <View style={style.inputBox}>
                    <TextInput 
                    style={style.inputText} 
                    placeholder="Confirmar senha"
                    onChangeText={(text) => setRegistro({ ...registroRecord, password: text })}
                    />
                </View>


            </View>     

            <View style={style.boxBottom}>

                <Pressable
                    style={({ pressed }) => [
                    style.buttomBox,
                    pressed && style.buttomPressed,
                    
                ]}
                    onPress={() => signup(registroRecord)}
                >
                    <Text style={style.buttomText}>Cadastrar</Text>
                </Pressable>

            </View>        
        </View>
    )
}


