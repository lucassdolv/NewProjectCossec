import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import CardProduct from '../Components/CardProducts';
import { useFonts } from 'expo-font';

export default function Categories() {
  const [fontsLoaded] = useFonts({
    'RedHatDisplay-Light': require('../../assets/fonts/RedHatDisplay-Light.ttf'),
    'RedHatDisplay-Bold': require('../../assets/fonts/RedHatDisplay-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const navigation = useNavigation();
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');
  const { userName, email, idCriador } = route.params || {};
  const [produtos, setProdutos] = useState([]);

  const handleSearch = () => {
    const filteredProdutos = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
    navigation.navigate('AllCategorie', { filteredProdutos });
  };

  const fetchProdutos = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/produtos');
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProdutos();
    }, [])
  );

  const renderProdutosPorCategoria = (categoria) => {
    const produtosFiltrados = produtos.filter((produto) => produto.categoria === categoria);
    return (
      <View>
        <FlatList
          data={produtosFiltrados}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardProduct produto={item} />}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('AllProduct', { filteredProdutos: produtosFiltrados })}
          >
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity
          style={styles.containerUser}
          onPress={() => navigation.navigate('Profile', { userName, email, idCriador })} >
          <Image style={styles.profileImage} source={require('../../assets/perfilIcon.png')} />
          <Text style={styles.username}>{String(userName || 'Usuário')}</Text>
        </TouchableOpacity>
        <Image style={styles.logoImage} source={require('../../assets/Logo02.webp')} />
      </View>
      <Text style={styles.searchText}>Procure por seus produtos</Text>
      <TextInput
        style={styles.inputCase}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Digite o produto desejado:"
        onSubmitEditing ={handleSearch}
      />
      <Text style={styles.categoriesText}>Mouse:</Text>
      {renderProdutosPorCategoria('mouse')}
      <Text style={styles.categoriesText}>Teclado:</Text>
      {renderProdutosPorCategoria('teclado')}
      <Text style={styles.categoriesText}>Headset:</Text>
      {renderProdutosPorCategoria('headset')}
      <Text style={styles.categoriesText}>MousePad:</Text>
      {renderProdutosPorCategoria('mousepad')}
      <Text style={styles.categoriesText}>Monitor:</Text>
      {renderProdutosPorCategoria('monitor')}
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
  containerUser: {
    marginTop: 17,
    flexDirection: "row"
  },
  profileImage: {
    width: 20,
    height: 20.25,
    marginRight: 5
  },
  username: {
    fontSize: 12,
    fontFamily: 'RedHatDisplay-Light'
  },
  logoImage: {
    width: 70,
    height: 61.32
  },
  searchText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: 'RedHatDisplay-Bold'
  },
  inputCase: {
    borderWidth: 1.2,
    borderRadius: 20,
    borderColor: "black",
    padding: 10,
    marginBottom: 15,
    height: 50,
    fontSize: 16,
    fontFamily: 'RedHatDisplay-Light'
  },
  categoriesText: {
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Light'
  },
  containerCards: {
    marginRight: 10
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 10,
    width: 162,
    height: 55,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Bold'
  },
})