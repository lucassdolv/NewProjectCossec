import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

export default function CardProduct({ produto }) {
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
    height: 200,
    alignItems: "center",
    borderWidth: 1.2,
    borderRadius: 20,
    borderColor: "black",
    padding: 10, 
    marginRight: 20
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
    fontFamily: 'RedHatDisplay-Light'
  },
  spacer: {
    flex: 1,
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
    fontFamily: 'RedHatDisplay-Bold'
  },
});
