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
    <View>
      <View style={styles.container}>
        <Pressable style={styles.backButton}>
          <Text style={styles.textBackButton}>{"<"}</Text>
        </Pressable>
        <Image style={styles.productImage} source={require('../../assets/mouse.png')}/>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.textName}>"Nome do produto"</Text>
        <Text style={styles.textPrice}>"Preço"</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textDesc}>"Descrição"</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 35,
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
