import { useNavigation } from 'expo-router'
import * as S from '../styleExit'

export default function VehicleExit() {
    const navigation = useNavigation()

    return (
        <S.Container>
            <S.Title>Saida</S.Title>
            <S.Input 
                placeholder="Placa"
                placeholderTextColor="black"
            />
            <S.Button onPress={() => navigation.navigate("Home")}><S.ButtonTitle>Registrar saida</S.ButtonTitle></S.Button>
        </S.Container>
    )
}