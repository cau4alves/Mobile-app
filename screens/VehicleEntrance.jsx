import * as S from '../styleEntrance';
import { useNavigation } from 'expo-router';
import Toast from 'react-native-toast-message';
import api from '../api';
import { useState } from 'react';


export default function VehicleEntrance() {
    const navigation = useNavigation()
    const [placa, setPlaca] = useState('');
    
    async function handleEntrance() {
        if (!placa) {
        Toast.show({
            type: 'error',
            text1: 'Campos obrigatórios',
            text2: 'Preencha todos os campos antes de continuar',
        });
        return;
        }
    
        try {
        const response = await api.post('/api/veiculos/entrada', {
            placa
        });
    
        Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: 'Veiculo cadastrado com sucesso.',
        });
        navigation.navigate('Home');
        } catch (error) {
        const msg = error.response?.data?.message || 'Erro ao cadastrar veiculo.';
        Toast.show({
            type: 'error',
            text1: 'Erro no cadastro',
            text2: msg,
        });
        }
    }

    return (
        <S.Container>
            <S.Title>Entrada</S.Title>
            <S.Input 
                placeholder="Placa"
                placeholderTextColor="black"
                value={placa}
                onChangeText={setPlaca}
            />
            <S.Button onPress={handleEntrance}><S.ButtonTitle>Registrar entrada</S.ButtonTitle></S.Button>
        </S.Container>
    )
} 