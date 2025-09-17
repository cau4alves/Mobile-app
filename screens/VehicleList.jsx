import { Text } from 'react-native';
import * as S from '../styleVehicleList';

export default function VehicleList() {
    return (
        <>
            <S.Header>
                <Text>Vehicle List Screen</Text>
            </S.Header>
            <S.Container>
                <S.Title>Carros Ativos</S.Title>
                <S.Cars>
                    <S.CarContainer>
                        <S.StatusCar>Placa</S.StatusCar>
                        <S.StatusCar>Entrada</S.StatusCar>
                    </S.CarContainer>
                </S.Cars>
                <S.Cars>
                    <S.CarContainer>
                        <S.StatusCar>Placa</S.StatusCar>
                        <S.StatusCar>Entrada</S.StatusCar>
                    </S.CarContainer>
                </S.Cars>
                <S.Cars>
                    <S.CarContainer>
                        <S.StatusCar>Placa</S.StatusCar>
                        <S.StatusCar>Entrada</S.StatusCar>
                    </S.CarContainer>
                </S.Cars>
            </S.Container>
        </>
    )
}