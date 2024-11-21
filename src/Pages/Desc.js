import { useFonts } from "expo-font";
import React from "react"
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

export default function Desc({ route, navigation}) {
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

  const { produto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerboxes1}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.shopText}>{"< Voltar"}</Text>
      </TouchableOpacity>
        <Image style={styles.productImage} source={require('../../assets/mouse.png')}/>
      </View>
      <View style={styles.containerInfos}>
      <Text style={styles.textName}>{produto.nome}</Text>
      <Text style={styles.textPrice}>R$ {produto.preco}</Text>
      </View>
      <View style={styles.containerboxes2}>
      <Text style={styles.textDesc}>Descrição: {produto.desc}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
    },
  containerboxes1: {
    paddingHorizontal: 30,
    marginTop: 50
  },
  containerboxes2: {
    paddingHorizontal: 30,
    alignItems: "center",
  },
  backButton: {
    marginTop: 70
  },
  shopText: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: 15,
    color: 'black',
  },
  productImage: {
    width: 290.37,
    height: 300
  },
  containerInfos: {
    marginTop: 10,
    width: '100%',
    height: "auto",
    backgroundColor: 'black'
  },
  textName: {
    marginTop: 10,
    paddingHorizontal: 25,
    fontSize: 25,
    color: 'white',
    fontFamily: 'RedHatDisplay-Light'
  }, 
  textPrice: {
    paddingHorizontal: 25,
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 10
  },
  textDesc: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Light'
  },
  button: {
    marginTop:50,
    backgroundColor: "#FF6500",
    paddingVertical: 15,
    borderRadius: 25,
    width: 162,
    height: 55,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Bold'
  },
})
