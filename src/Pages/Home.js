import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

export default function Home() {
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

  return (
    <View style={styles.container}>
      <Pressable style={styles.shopLink} onPress={() => console.log("Ir direto à loja")}>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  shopLink: {
    alignSelf: 'flex-end',
    marginBottom: 100,
  },
  shopText: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: 15,
    color: 'black',
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 15,
    color: '#666',
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'RedHatDisplay-Light',
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
    fontFamily: 'RedHatDisplay-Bold',
  },
});
