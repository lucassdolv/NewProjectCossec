import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; 
import CardProduct from '../Components/CardProducts';

export default function AllCategorie({ route }) {
    const navigation = useNavigation(); 
    const { filteredProdutos } = route.params || [];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.shopText}>{"< Voltar"}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Produtos Encontrados:</Text>

            {filteredProdutos.length === 0 ? (
                <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
            ) : (
                <>
                    <FlatList
                        data={filteredProdutos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CardProduct produto={item} />}
                        numColumns={2}
                        columnWrapperStyle={styles.columnWrapper}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontFamily: 'RedHatDisplay-Bold',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    emptyText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    shopText: {
        marginTop: 20,
        fontFamily: "RedHatDisplay-Light",
        fontSize: 15,
        color: "black",
    }
});
