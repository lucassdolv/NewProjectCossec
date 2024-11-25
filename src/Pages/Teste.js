import React from 'react'
import { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function Teste() {
    const [imageUri, setImageUri] = useState(null);
    const selectImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: true,
            },
            (response) => {
                if (response.didCancel) {
                    console.log('Usuário cancelou a seleção');
                } else if (response.errorMessage) {
                    console.error('Erro:', response.errorMessage);
                } else {
                    setImageUri(response.assets[0].uri); 
                    uploadImage(response.assets[0]);
                }
            }
        );
    };
    const uploadImage = async (image) => {
        const data = new FormData();
        data.append('file', {
            uri: image.uri,
            type: image.type, 
            name: image.fileName, 
        });

        try {
            const response = await fetch('URL_DO_SEU_SERVIDOR', {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const result = await response.json();
            console.log('Upload realizado:', result);
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
        }
    };

  return (
    <View>

    </View>
  )
}
0