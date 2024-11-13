import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardProduct({ produto }) {
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={require('../../assets/mouse.png')} />
      <Text style={styles.textName}>{produto.nome}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver produto</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        width: 150,
        height: 200,
        alignItems: "center",
        borderWidth: 1.2,
        borderRadius: 20,
        borderColor: "black",
    },
    productImage: {
        width: 104.66,
        height: 100
    },
    textName: {
        fontSize: 16,
    },
    button: {
        backgroundColor: "#FF6500",
        paddingVertical: 10,
        borderRadius: 25,
        width: "80%",
        height: 40,
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontSize: 12,
      },
})
