import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function CardProduct({ produto }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={require('../../assets/mouse.png')} />
      <Text style={styles.textName} numberOfLines={1}>{produto.nome}</Text>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Desc', { produto })}>
        <Text style={styles.buttonText}>Ver produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200, // Altura fixa para padronizar
    alignItems: "center",
    borderWidth: 1.2,
    borderRadius: 20,
    borderColor: "black",
    padding: 10, // Espaçamento interno
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textName: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  spacer: {
    flex: 1, // Adiciona um espaço flexível entre o texto e o botão
  },
  button: {
    backgroundColor: "#FF6500",
    paddingVertical: 10,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
