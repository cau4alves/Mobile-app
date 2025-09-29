import * as S from '../styleEntrance';


export default function VehicleEntrance() {
    return (
        <S.Container>
            <S.Title>Entrada</S.Title>
            <S.Input 
                placeholder="Placa"
                placeholderTextColor="black"
            />
            <S.Button><S.ButtonTitle>Registrar entrada</S.ButtonTitle></S.Button>
        </S.Container>
    )
}