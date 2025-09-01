import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/LIBRANOS.png"

export default function Login (){
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
                    <TextInput />
                    <Text style={style.inputText}>E-mail</Text>
            </View>
                
            <View style={style.inputBox}>
                    <TextInput />
                    <Text style={style.inputText}>Senha</Text>
            </View>

            <View style={style.buttomBox}>
                    <TextInput />
                    <Text style={style.buttomText}>Entrar</Text>
            </View>    

            <View style={style.buttomBox}>
                    <TextInput />
                    <Text style={style.buttomText}>Cadastrar</Text>
            </View>

         

        </View>
    )
}