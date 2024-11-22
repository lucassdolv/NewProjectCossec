import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardDelete() {
  const [fontsLoaded] = useFonts({
    'RedHatDisplay-Light': require('../../assets/fonts/RedHatDisplay-Light.ttf'),
    'RedHatDisplay-Bold': require('../../assets/fonts/RedHatDisplay-Bold.ttf'),
  });

  // Exibir indicador de carregamento até as fontes serem carregadas
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={require('../../assets/mouse.png')}/>
      <View style={styles.containerInfo}>
        <Text numberOfLines={1}>{produto.nome}</Text>
        <Text>{produto.preco}</Text>
      </View>
      <View style={styles.containerButtons}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Desc", { produto })}>
        <Text style={styles.buttonText}>Deletar produto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Desc", { produto })}>
        <Text style={styles.buttonText}>Ver produto</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1.2,
    borderBottomColor: "black",
    borderTopWidth: 1.2,
    borderTopColor: "black",
    height: 170,
    alignItems: "center"
  },
  productImage: {
    width: "30%",
    height: "70%",
  },
  containerInfo: {
    flexDirection: "column",

  },
  containerButtons: {
    flexDirection: "column",
    marginLeft: 20
  },
  button: {
    backgroundColor: "#FF6500",
    paddingVertical: 10,
    borderRadius: 25,
    width: 100,
    alignItems: "center",
    marginBottom: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: 'RedHatDisplay-Bold'
  },
})