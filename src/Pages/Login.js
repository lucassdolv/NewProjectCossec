import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function Login() {
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
    },
    containerForm: {
        marginTop: 95
    },
    askText: {
        fontSize: 16,
        marginBottom: 5
    },
    inputCase: {
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: "black",
        marginBottom: 20,
        height: 50,
        fontSize: 16
    },
    buttonPassword: {
        alignItems: 'flex-end',
        marginBottom: 15,
        marginRight: 3
    },
    textForgotPassword: {
        color: '#2234A8'
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
      },
    creditsText: {
        marginTop: 100,
        marginLeft: 85,
        fontSize: 20
    }
})

