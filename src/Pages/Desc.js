import React from "react"
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

export default function Desc({ route, navigation}) {
  const { produto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerboxes1}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{"< Voltar"}</Text>
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
  textBackButton: {
    fontSize:12
  },
  productImage: {
    width: 290.37,
    height: 300
  },
  containerInfos: {
    marginTop: 10,
    width: '100%',
    height: 134,
    backgroundColor: 'black'
  },
  textName: {
    marginTop: 10,
    paddingHorizontal: 25,
    fontSize: 20,
    color: 'white'
  }, 
  textPrice: {
    paddingHorizontal: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60
  },
  textDesc: {
    marginTop: 10,
    fontSize: 16
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
  },
})
