import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image style={styles.logo} source={require('../../assets/Logo01.jpg')} />
                <Text style={styles.titleText}>Cadastro</Text>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.askText}>
                    Nome:
                </Text>
                <TextInput style={styles.inputCase} placeholder='  Digite seu nome:' />
                <Text style={styles.askText}>
                    Email:
                </Text>
                <TextInput style={styles.inputCase} placeholder='  Digite seu email:' />
                <Text style={styles.askText}>
                    Senha:
                </Text>
                <TextInput style={styles.inputCase} placeholder='  Digite sua senha:' />
                <Text style={styles.askText}>
                    Endereço:
                </Text>
                <TextInput style={styles.inputCase} placeholder='  Digite seu endereço:' />
                <Text style={styles.askText}>
                    Complemento:
                </Text>
                <TextInput style={styles.inputCase} placeholder='  Digite o complemento:' />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 35,
    },
    containerTitle: {
        marginLeft: 36,
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
})
