import { SafeAreaView, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import * as S from '../styleLogin.js';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useState } from 'react';
import api from '../api.js';
 

export default function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    async function handleLogin() {
      if (!email || !senha) {
        Toast.show({
          type: 'error',
          text1: 'Campos obrigatórios',
          text2: 'Preencha todos os campos antes de continuar',
        });
        return;
      }
  
      try {
        const response = await api.post('/auth/login', {
          email,
          senha,
        });
  
        Toast.show({
          type: 'success',
          text1: 'Sucesso!',
          text2: 'Login realizado com sucesso.',
        });
        navigation.navigate('Home');
      } catch (error) {
        const msg = error.response?.data?.message || 'Erro ao entrar na conta.';
        Toast.show({
          type: 'error',
          text1: 'Erro no Login',
          text2: msg,
        });
      }
    }

    return (
    <S.Container>
       

        <S.Title>Sign in to your Account</S.Title>
        <S.SubTitle>Don’t have an account? 
        <Text onPress={() => navigation.navigate("Register")} style={{ color: "#4D81E7" }}> Sign Up</Text></S.SubTitle>
      

        <S.Input1
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />

        <S.Input2
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <S.Button onPress={handleLogin}>
          <S.ButtonText>Log In</S.ButtonText>
        </S.Button>
    </S.Container>
  );
}
