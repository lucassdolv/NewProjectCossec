import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [fontsLoaded] = useFonts({
        'RedHatDisplay-Light': require('../../assets/fonts/RedHatDisplay-Light.ttf'),
        'RedHatDisplay-Bold': require('../../assets/fonts/RedHatDisplay-Bold.ttf'),
    });

    const navigation = useNavigation();

    // Exibir indicador de carregamento até as fontes serem carregadas
    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`http://10.0.2.2:3000/usuarios?email=${email}&senha=${password}`);
            const data = await response.json();

            if (data.length > 0) {
                Alert.alert('Sucesso', 'Login realizado com sucesso!');
                navigation.navigate('Categories', { userName: data[0].nome, email: data[0].email, idCriador: data[0].id });
            } else {
                Alert.alert('Erro', 'Email ou senha incorretos.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image style={styles.logo} source={require('../../assets/Logo01.jpg')} />
                <Text style={styles.titleText}>Login</Text>
            </View>
            <View style={styles.containerForm}>
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
            </View>
            <TouchableOpacity style={styles.buttonPassword}>
                <Text style={styles.textForgotPassword}>Esqueci a senha</Text>
            </TouchableOpacity>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.creditsText}>By: Lucas Santos</Text>
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
        marginLeft: 56,
        marginTop: 85,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 70.98,
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'RedHatDisplay-Bold',
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
    buttonPassword: {
        alignItems: 'flex-end',
        marginBottom: 15,
        marginRight: 3,
    },
    textForgotPassword: {
        color: '#2234A8',
        fontFamily: 'RedHatDisplay-Light',
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
    creditsText: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'RedHatDisplay-Light',
    },
});
