import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Categories() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.containerUser}>
                    <Image style={styles.profileImage} source={require('../../assets/perfilIcon.png')}/>
                    <Text style={styles.username}>Usuario</Text>
                </View>
                <Image style={styles.logoImage} source={require('../../assets/Logo02.webp')}/>
            </View>
            <Text style={styles.searchText}>Procure por seus produtos</Text>
            <TextInput style={styles.inputCase} placeholder='  Digite o produto desejado:'/>
            <Text style={styles.categoriesText}>Mouse:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text style={styles.categoriesText}>Teclado:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text style={styles.categoriesText}>Headset:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text style={styles.categoriesText}>MousePad:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text style={styles.categoriesText}>Monitor</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 35,
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
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 25,
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