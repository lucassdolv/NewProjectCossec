import { useFonts } from "expo-font";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CardDelete({ produto, onDelete }) {
  const [fontsLoaded] = useFonts({
    "RedHatDisplay-Light": require("../../assets/fonts/RedHatDisplay-Light.ttf"),
    "RedHatDisplay-Bold": require("../../assets/fonts/RedHatDisplay-Bold.ttf"),
  });

  // Exibir indicador de carregamento até as fontes serem carregadas
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Função para deletar produto
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:3000/produtos/${produto.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Produto deletado com sucesso!");
        if (onDelete) onDelete(produto.id); // Chama a função de callback para atualizar a lista
      } else {
        Alert.alert("Erro", "Não foi possível deletar o produto.");
      }
    } catch (error) {
      console.error("Erro ao deletar o produto:", error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar deletar o produto.");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={require("../../assets/mouse.png")} />
      <View style={styles.containerInfo}>
        <Text numberOfLines={1} style={styles.productName}>
          {produto.nome}
        </Text>
        <Text style={styles.productPrice}>{produto.preco}</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Deletar produto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Desc", { produto })}
        >
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
    width: 392,
    height: 170,
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
  },
  productImage: {
    width: "30%",
    height: "70%",
  },
  containerInfo: {
    flexDirection: "column",
    width: 100,
  },
  productName: {
    fontFamily: "RedHatDisplay-Bold",
    fontSize: 14,
    color: "#000",
  },
  productPrice: {
    fontFamily: "RedHatDisplay-Light",
    fontSize: 12,
    color: "#555",
  },
  containerButtons: {
    flexDirection: "column",
    marginLeft: 50,
  },
  button: {
    backgroundColor: "#FF6500",
    paddingVertical: 10,
    borderRadius: 25,
    width: 100,
    alignItems: "center",
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "RedHatDisplay-Bold",
  },
});