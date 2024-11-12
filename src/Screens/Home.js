import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <Pressable style={styles.shopLink} >
        <Text style={styles.shopText}>
          ir direto à loja {'>'}
        </Text>
      </Pressable>
      <Text style={styles.welcomeText}>
        Bem-vindo à Cossec!
      </Text>
      <Text style={styles.subtitleText}>
        Sua loja de periféricos.
      </Text>
      <Image source={require('../../assets/Logo01.jpg')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} >Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  shopLink: {
    alignSelf: 'flex-end',
    marginTop: 70,
    marginBottom: 140,
  },
  shopText: {
    fontSize: 12,   
    color: 'black',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 80,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center', 
    width: 140,
    height: 124,
    marginBottom: 80,
  },
  buttonContainer: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
