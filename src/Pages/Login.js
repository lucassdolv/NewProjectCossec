import React from 'react'
import { ActivityIndicator, Button, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

export default function Login() {
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
            <View style={styles.containerTitle}>
                <Image style={styles.logo} source={require('../../assets/Logo01.jpg')} />
                <Text style={styles.titleText}>Login</Text>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.askText}>Email:</Text>
                <TextInput style={styles.inputCase} placeholder='  Digite seu email:' />
                <Text style={styles.askText}>Senha:</Text>
                <TextInput style={styles.inputCase} placeholder='  Digite sua senha:' />
            </View>
            <Pressable style={styles.buttonPassword}>
                <Text style={styles.textForgotPassword}>
                    esqueci a senha
                </Text>
            </Pressable>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Categories')}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Cadastro')}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.creditsText}>
                By: Lucas Santos
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 35,
        flex: 1
    },
    containerTitle: {
        marginLeft: 56,
        marginTop: 85,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 70.98
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'RedHatDisplay-Bold'
    },
    containerForm: {
        marginTop: 95
    },
    askText: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'RedHatDisplay-Bold'
    },
    inputCase: {
        borderWidth: 1.2,
        borderRadius: 20,
        borderColor: "black",
        marginBottom: 20,
        height: 50,
        fontSize: 16,
        fontFamily: 'RedHatDisplay-Light'
    },
    buttonPassword: {
        alignItems: 'flex-end',
        marginBottom: 15,
        marginRight: 3
    },
    textForgotPassword: {
        color: '#2234A8',
        fontFamily: 'RedHatDisplay-Light'
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 25,
        width: 162,
        height: 55,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'RedHatDisplay-Bold'
      },
    creditsText: {
        marginTop: 100,
        marginLeft: 85,
        fontSize: 20,
        fontFamily: 'RedHatDisplay-Light'
    }
})

