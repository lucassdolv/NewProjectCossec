import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleAddProduct = async () => {
    if (!productName || !category || !price || !description) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://10.0.2.2:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Date.now().toString(), // Gerando um ID único com timestamp
          nome: productName,
          categoria: category,
          preco: parseFloat(price), // Convertendo o preço para número
          desc: description,
        }),
      });

      if (response.ok) {
        alert('Produto adicionado com sucesso!');
        setProductName('');
        setCategory('');
        setPrice('');
        setDescription('');
      } else {
        alert('Erro ao adicionar o produto.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao conectar-se ao servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Adicionar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.addButtonText}>Adicionar</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingTop: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'RedHatDisplay-Light',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Bold',
  },
});
