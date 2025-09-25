import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01356c",
    paddingTop: 40,
    alignItems: "center",
  },

  boxTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between", 
  },

  voltar: {
    paddingHorizontal: 10,
    borderRadius: 50,
  },

  voltarPressed: {
    backgroundColor: "#e0e0e0",
  },

  title: {
    fontSize: 27,
    fontWeight: "700",
    fontFamily:"../../assets/fonts/GentySans-Regular.ttf",
    color: "#9ecce7",
    marginBottom: 20,
    marginTop: 30,
  },

  stepsContainer: {
    alignItems: "center",
  },

  stepBox: {
    alignItems: "center",
    marginBottom: 10,
  },

  stepCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0047cc",
    justifyContent: "center",
    alignItems: "center",
  },

  stepIcon: {
    width: 48,
    height: 48,
    tintColor: "#7bb9dc",
  },

  stepPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#7aa3ff",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9ecce7",
    marginTop: 8,
  },

  lineDashed: {
    width: 2,
    height: 36,
    borderStyle: "dashed",
    borderColor: "#9ecce7",
    borderWidth: 1,
    marginVertical: 6,
  },

  ceta: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  
  logo:{
    height:50,
    width:90,
    paddingHorizontal:10,
  }
});