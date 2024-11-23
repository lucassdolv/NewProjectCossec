import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardDelete from "../Components/CardDelete";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DeleteProd() {
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

  const navigation = useNavigation();
  const route = useRoute();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("http://10.0.2.2:3000/produtos");
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        Alert.alert("Erro", "Não foi possível buscar os produtos.");
      }
    };

    fetchProdutos();
  }, []);

  // Função para remover produto do estado após exclusão
  const removeProduto = (id) => {
    setProdutos((prevProdutos) =>
      prevProdutos.filter((produto) => produto.id !== id)
    );
  };

  const renderProdutosPorId = (idCriador) => {
    const produtosFiltrados = produtos.filter(
      (produto) => produto.idDoCriador === idCriador
    );

    if (produtosFiltrados.length === 0) {
      return <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>;
    }

    return (
      <View>
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardDelete produto={item} onDelete={removeProduto} />
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.shopText}>{"< Voltar"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Deletar Produto</Text>
      </View>
      {renderProdutosPorId("1732214153767")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  containerTop: {
    paddingHorizontal: 30,
  },
  shopText: {
    fontFamily: "RedHatDisplay-Light",
    fontSize: 15,
    color: "black",
  },
  title: {
    fontSize: 20,
    fontFamily: "RedHatDisplay-Bold",
    textAlign: "center",
    marginTop: 30,
    borderBottomWidth: 1.2,
  },
  emptyText: {
    fontFamily: "RedHatDisplay-Light",
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
