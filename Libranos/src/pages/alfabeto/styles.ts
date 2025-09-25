import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#01356c",
        paddingTop: 40,
    },

    boxTop: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    boxMid: {
        display: "flex",
        alignItems: "center",
        marginTop: 10,
    },

    boxBottom: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    texto2: {
        paddingHorizontal: 60,
    },

    respostas: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 20,
    },

    carta: {
        width: "48%",
        aspectRatio: 1,
        backgroundColor: "#5998f7ff",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },


    cartaAtiva: {
        backgroundColor: "#014dbeff", 
    },

    voltar: {
        paddingHorizontal: 10,
        borderRadius: 50,
    },

    voltarPressed: {
        backgroundColor: "#e0e0e0",
    },

    titulo: {
        fontSize: 50,
        color: "#9ecce7",
        fontFamily: "../../assets/fonts/GentySans-Regular.ttf",
        fontWeight: "bold",
    },

    enunciado: {
        justifyContent: "center",
        textAlign: "center",
        marginTop: 70,
        fontSize: 30,
        color: "#9ecce7",
        fontFamily: "GentleSans",
    },

    buttomBox: {
        color: "#9ecce7",
        width: "80%",
        height: 55,
        borderWidth: 0,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        backgroundColor: "#9ecce7",
    },

    buttomPressed: {
        backgroundColor: "#7bb9dc",
    },

    botaoDesativado: {
        opacity: 0.5,
    },

    buttomText: {
        fontSize: 27,
        color: "#01356c",
    },

    ceta: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },

    logo: {
        height: 50,
        width: 90,
        paddingHorizontal: 10,
    },

    image: {
        width: "60%",
        height: "60%",
    },
});