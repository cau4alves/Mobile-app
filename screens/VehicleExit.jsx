import { useNavigation } from 'expo-router'
import * as S from '../styleExit'
import { useState } from 'react';
import api from '../api';
import Toast from 'react-native-toast-message';

export default function VehicleExit() {
    const navigation = useNavigation()
    const [placa, setPlaca] = useState('');
        
        async function handleExit() {
            if (!placa) {
            Toast.show({
                type: 'error',
                text1: 'Campos obrigatórios',
                text2: 'Preencha todos os campos antes de continuar',
            });
            return;
            }
        
            try {
            const response = await api.put('/api/veiculos/saida', {
                placa
            });
        
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Saida registrada com sucesso.',
            });
            navigation.navigate('Home');
            } catch (error) {
            const msg = error.response?.data?.message || 'Erro ao cadastrar saida veiculo.';
            Toast.show({
                type: 'error',
                text1: 'Erro no cadastro',
                text2: msg,
            });
            }
        }
    

    return (
        <S.Container>
            <S.Title>Saida</S.Title>
            <S.Input 
                placeholder="Placa"
                placeholderTextColor="black"
                value={placa}
                onChangeText={setPlaca}
            />
            <S.Button onPress={handleExit}><S.ButtonTitle>Registrar saida</S.ButtonTitle></S.Button>
        </S.Container>
    )
}