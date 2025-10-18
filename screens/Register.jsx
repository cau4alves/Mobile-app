import { SafeAreaView, Text } from "react-native";
import { useState } from 'react';
import * as S from '../styleRegister';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import api from "../api";
import Toast from "react-native-toast-message";

export default function Register() {
    const navigation = useNavigation()
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleRegister() {
    if (!nome || !email || !senha) {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Preencha todos os campos antes de continuar',
      });
      return;
    }

    try {
      const response = await api.post('/auth/register', {
        nome,
        email,
        senha,
      });

      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Conta criada com sucesso.',
      });
      navigation.navigate('Login');
    } catch (error) {
      const msg = error.response?.data?.message || 'Erro ao criar conta.';
      Toast.show({
        type: 'error',
        text1: 'Erro no cadastro',
        text2: msg,
      });
    }
  }

    return (
        <S.Container>
            <StatusBar hidden />
            <S.Title>Create Account</S.Title>
            <S.SubTitle>Already have an account? <Text onPress={() => navigation.navigate("Login")} style={{ color: "#4D81E7" }}>Sign In</Text></S.SubTitle>
            <S.Input1
                placeholder="Username"
                placeholderTextColor="black"
                value={nome}
                onChangeText={setNome}
            />
            <S.Input 
                placeholder="Email"
                placeholderTextColor="black"
                value={email}
                onChangeText={setEmail}
            />
            <S.Input2
                placeholder="Password"
                placeholderTextColor="black"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <S.Button onPress={handleRegister}>
                <Text style={{ color: "white", fontSize: 16 }}>Register</Text>
            </S.Button>
        </S.Container>
    )
}