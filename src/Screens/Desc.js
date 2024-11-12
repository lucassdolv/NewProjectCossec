import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Desc() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text>{"<"}</Text>
      </Pressable>
      <Image />
      <View>
        <Text>"Nome do produto"</Text>
        <Text>"Preço"</Text>
      </View>
      <Text>"Descrição"</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 35,
  },
  button: {
    backgroundColor: "#FF6500",
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
    width: 162,
    height: 55,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
