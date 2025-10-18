import { useNavigate } from 'react-router-native';
import * as S from '../styleEntrance';
import { useNavigation } from 'expo-router';


export default function VehicleEntrance() {
    const navigation = useNavigation()

    return (
        <S.Container>
            <S.Title>Entrada</S.Title>
            <S.Input 
                placeholder="Placa"
                placeholderTextColor="black"
            />
            <S.Button onPress={() => navigation.navigate("Home")}><S.ButtonTitle>Registrar entrada</S.ButtonTitle></S.Button>
        </S.Container>
    )
} 