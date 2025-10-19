import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import * as S from '../styleVehicleList';
import { useNavigation } from '@react-navigation/native';
import api from '../api';
import Toast from 'react-native-toast-message';

export default function VehicleList() {
  const navigation = useNavigation();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchVehicles() {
    try {
      setLoading(true);
      const response = await api.get('/api/veiculos'); 
      setVehicles(response.data);
    } catch (error) {
      console.error('Erro ao buscar veículos:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar veículos',
        text2: error.response?.data?.message || 'Verifique sua conexão.',
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchVehicles();
    setRefreshing(false);
  };

  return (
    <S.Container>
      <S.Title>Carros Ativos</S.Title>

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      ) : vehicles.length === 0 ? (
        <Text style={{ marginTop: 30, fontSize: 16, color: '#FEDD66' }}>
          Nenhum veículo ativo no momento.
        </Text>
      ) : (
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {vehicles.map((vehicle, index) => (
            <S.Cars key={index}>
              <S.CarContainer>
                <S.StatusCar>Placa: {vehicle.placa}</S.StatusCar>
                <S.StatusCar>
                  Entrada: {new Date(vehicle.dataEntrada).toLocaleString('pt-BR')}
                </S.StatusCar>
              </S.CarContainer>
            </S.Cars>
          ))}
        </ScrollView>
      )}

      <S.ButtonEntry onPress={() => navigation.navigate('Entrance')}>
        <S.ButtonTitle>Registrar entrada</S.ButtonTitle>
      </S.ButtonEntry>

      <S.ButtonExit onPress={() => navigation.navigate('Exit')}>
        <S.ButtonTitle>Registrar saída</S.ButtonTitle>
      </S.ButtonExit>
    </S.Container>
  );
}
