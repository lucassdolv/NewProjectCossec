import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [loading, setLoading] = useState(false);

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
    const handleRegister = async () => {
        if (!name || !email || !password || !address || !complement) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        setLoading(true);

        try {
            const response = await fetch('http://10.0.2.2:3000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: Date.now().toString(),
                    nome: name,
                    senha: password,
                    endereco: address,
                    complemento: complement,
                    email: email,
                }),
            });
            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                setName('');
                setEmail('');
                setPassword('');
                setAddress('');
                setComplement('');
                navigation.navigate('Login');
            } else {
                alert('Erro ao cadastrar o usuário.');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao conectar-se ao servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image style={styles.logo} source={require('../../assets/Logo01.jpg')} />
                <Text style={styles.titleText}>Cadastro</Text>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.askText}>Nome:</Text>
                <TextInput
                    style={styles.inputCase}
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.askText}>Email:</Text>
                <TextInput
                    style={styles.inputCase}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text style={styles.askText}>Senha:</Text>
                <TextInput
                    style={styles.inputCase}
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Text style={styles.askText}>Endereço:</Text>
                <TextInput
                    style={styles.inputCase}
                    placeholder="Digite seu endereço"
                    value={address}
                    onChangeText={setAddress}
                />
                <Text style={styles.askText}>Complemento:</Text>
                <TextInput
                    style={styles.inputCase}
                    placeholder="Digite o complemento"
                    value={complement}
                    onChangeText={setComplement}
                />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 35,
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {
        marginLeft: 36,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 70.98,
    },
    titleText: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: 20,
    },
    containerForm: {
        marginTop: 95,
    },
    askText: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'RedHatDisplay-Bold',
    },
    inputCase: {
        borderWidth: 1.2,
        borderRadius: 20,
        borderColor: "black",
        marginBottom: 20,
        height: 50,
        fontSize: 16,
        fontFamily: 'RedHatDisplay-Light',
        paddingLeft: 15,
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
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'RedHatDisplay-Bold',
    },
});
