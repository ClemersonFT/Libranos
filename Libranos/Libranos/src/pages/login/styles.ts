import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#01356c",
        padding:20
    },


    boxTop:{
        height:Dimensions.get("window").height/1.8,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
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


    text:{
        fontSize:90,
        color:"#9ecce7"
    },

    text2:{
        fontSize:19,
        color:"#9ecce7", 
        marginBottom:10
    },

    inputText:{
        fontSize:27,
        paddingHorizontal:30, 
        color:themas.colors.coal
    }, 

    buttomText:{
        fontSize:27,
        color:"#01356c"
    },

    imagem:{
        height:300,
        width:"100%"
    }
})