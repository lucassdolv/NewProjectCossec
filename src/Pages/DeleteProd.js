import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CardDelete from '../Components/CardDelete';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DeleteProd() {
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
      const route = useRoute();
      const [produtos, setProdutos] = useState([]);

      useEffect(() => {
        const fetchProdutos = async () => {
          try {
            const response = await fetch('http://10.0.2.2:3000/produtos'); 
            const data = await response.json();
            setProdutos(data);
          } catch (error) {
            console.error('Erro ao buscar produtos:', error);
          }
        };
    
        fetchProdutos();
      }, []);
    
      const renderProdutosPorId = (idCriador) => {
        const produtosFiltrados = produtos.filter((produto) => produto.idDoCriador === idCriador);
        return (
          <View>
            <FlatList
              data={produtosFiltrados}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CardDelete produto={item} />}
            />
          </View>
        );
      };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Text style={styles.shopText}>{"< Voltar"}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Deletar Produto</Text>
      </View>
      {renderProdutosPorId('1732214153767')}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
      },
      containerTop:{
        paddingHorizontal: 30
      },
      shopText: {
        fontFamily: "RedHatDisplay-Light",
        fontSize: 15,
        color: "black",
      },
      title: {
        fontSize: 20,
        fontFamily: 'RedHatDisplay-Bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
      },
})