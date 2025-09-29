import React from 'react';
import { Text } from 'react-native';
import * as S from '../styleVehicleList';

const vehicles = [
  { placa: 'ABC1234', entrada: '2023-09-29 08:30' },
  { placa: 'XYZ5678', entrada: '2023-09-29 09:00' },
  { placa: 'LMN9012', entrada: '2023-09-29 10:00' }
];

export default function VehicleList() {
    return (           
            <S.Container>
                <Text>Vehicle List Screen</Text>
                <S.Title>Carros Ativos</S.Title>
                {vehicles.map((vehicle, index) => (
                    <S.Cars key={index}>
                        <S.CarContainer>
                            <S.StatusCar>{vehicle.placa}</S.StatusCar>
                            <S.StatusCar>{vehicle.entrada}</S.StatusCar>
                        </S.CarContainer>
                    </S.Cars>
                ))}
                <S.Button><S.ButtonTitle>Registrar entrada</S.ButtonTitle></S.Button>
            </S.Container>
        
    );
}
