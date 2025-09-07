import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#01356c",
    },

    boxTop:{
        marginTop:50,
        justifyContent:"center",
        alignItems:"center",
    },

    boxMid:{
        paddingTop:20,
        paddingHorizontal:30,
    },

    boxBottom:{
        marginTop:20,
        paddingHorizontal:120
    },

    voltar:{
        paddingHorizontal: 10,
        borderRadius: 50,
        alignSelf: "flex-start",
    },

    voltarPressed:{
        backgroundColor: "#e0e0e0", 
    },

    inputBox:{
        width:"100%",
        height:55,
        borderWidth:0,
        borderRadius:20,
        margin:5,
        justifyContent:"center",
        backgroundColor:"#9ecce7"
    },

    buttomBox:{
        color:"#9ecce7",
        width:"100%",
        height:55,
        borderWidth:0,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        margin:5,
        backgroundColor:"#9ecce7"
    },

    buttomPressed: {
    backgroundColor: "#7bb9dc" 
    },

    text: {
        fontSize:80,
        color:"#9ecce7"
    },

    inputText:{
        fontSize:27,
        paddingHorizontal:30, 
    }, 

    buttomText:{
        fontSize:27,
        color:"#01356c"
    },

    ceta: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },

    logo:{
        height:230,
        width:"100%"
    }
});