import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Categories() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image />
                    <Text>Usuario</Text>
                </View>
                <Image />
            </View>
            <Text>Procure por seus produtos</Text>
            <TextInput placeholder='  Digite o produto desejado:' />
            <Text>Mouse:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text>Teclado:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text>Headset:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text>MousePad:</Text>
            {/* Espaço para card */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
            <Text>Monitor</Text>
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