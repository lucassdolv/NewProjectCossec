import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CardProduct from '../Components/CardProducts'


export default function Categories() {
    const navigation = useNavigation();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
      const fetchProdutos = async () => {
        try {
          const response = await fetch('http://10.0.2.2:3000/produtos'); // Porta padrão do json-server
          const data = await response.json();
          setProdutos(data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error)
        }
      }
  
      fetchProdutos()
    }, [])
  
    const renderProdutosPorCategoria = (categoria) => {
      const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
      return (
        <View>
          <FlatList
            data={produtosFiltrados}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CardProduct produto={item} />}
          />
        </View>
      )
    } 
    return (
        <ScrollView style={styles.container}>
          <View style={styles.containerTop}>
            <View style={styles.containerUser}>
              <Image style={styles.profileImage} source={require('../../assets/perfilIcon.png')} />
              <Text style={styles.username}>Usuario</Text>
            </View>
            <Image style={styles.logoImage} source={require('../../assets/Logo02.webp')} />
          </View>
          <Text style={styles.searchText}>Procure por seus produtos</Text>
          <TextInput style={styles.inputCase} placeholder='  Digite o produto desejado:' />
          <Text style={styles.categoriesText}>Mouse:</Text>
          {renderProdutosPorCategoria('mouse')}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.categoriesText}>Teclado:</Text>
          {renderProdutosPorCategoria('teclado')}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.categoriesText}>Headset:</Text>
          {renderProdutosPorCategoria('headset')}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.categoriesText}>MousePad:</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.categoriesText}>Monitor:</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );      
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 35,
        flex: 1
    },
    containerTop: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerUser:{
        marginTop: 17,
        flexDirection: "row"
    },
    profileImage: {
        width:20,
        height: 20.25,
        marginRight: 5
    },
    username: {
        fontSize: 12
    }, 
    logoImage: {
        width: 70,
        height: 61.32
    },
    searchText: {
        marginTop: 10,
        marginBottom: 10,
        fontSize:20,
        textAlign: "center"
    },
    inputCase: {
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: "black",
        marginBottom: 15,
        height: 50,
        fontSize: 16
    },
    categoriesText: {
        fontSize:20
    },
    buttonContainer: {
        alignItems: 'center', 
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 10,
        marginBottom:10,
        width: 162,
        height: 55,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
      },
})