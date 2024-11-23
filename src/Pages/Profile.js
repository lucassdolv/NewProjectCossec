import React from "react";
import {ActivityIndicator,Image,ScrollView,StyleSheet,Text,TouchableOpacity,View,} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Profile() {
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
  const { userName, email, idCriador } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.containerBack}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.shopText}>{"< Voltar"}</Text>
      </TouchableOpacity>
      <View style={styles.containerTop}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/perfilIcon.png")}
        />
        <View>
          <Text style={styles.username}>{String(userName || 'Usuário')}</Text>
          <Text style={styles.email}>{String(email || 'Usuário')}</Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <Text style={styles.title}>Minha Conta</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log("Histórico de compras")}
        >
          <Text style={styles.optionText}>Lista de Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("AddProd", {idCriador})}
        >
          <Text style={styles.optionText}>Adicionar Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("DeleteProd")}
        >
          <Text style={styles.optionText}>Deletar Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  containerBack: {
    marginTop: 20,
  },
  shopText: {
    fontFamily: "RedHatDisplay-Light",
    fontSize: 15,
    color: "black",
  },
  containerButtons: {
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTop: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  username: {
    fontSize: 20,
    fontFamily: "RedHatDisplay-Bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    fontFamily: "RedHatDisplay-Light",
    color: "#666",
  },
  title: {
    fontSize: 20,
    fontFamily: "RedHatDisplay-Bold",
    textAlign: "center",
    marginTop: 100,
    marginBottom: 30,
  },
  option: {
    backgroundColor: "#FF6500",
    paddingVertical: 15,
    borderRadius: 25,
    width: 250,
    height: 55,
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "RedHatDisplay-Bold",
  },
  logoutButton: {
    marginTop: 200,
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 25,
    width: 162,
    height: 55,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "RedHatDisplay-Bold",
  },
});
