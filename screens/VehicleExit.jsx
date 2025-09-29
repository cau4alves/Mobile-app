import * as S from '../styleExit'

export default function VehicleExit() {
    return (
        <S.Container>
            <S.Title>Saida</S.Title>
            <S.Input 
                placeholder="Placa"
                placeholderTextColor="black"
            />
            <S.Button><S.ButtonTitle>Registrar saida</S.ButtonTitle></S.Button>
        </S.Container>
    )
}