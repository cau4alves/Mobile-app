import { SafeAreaView, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import * as S from '../style.js';
import { useNavigation } from '@react-navigation/native'; 
 

export default function Login() {
  const navigation = useNavigation();

  return (
    <S.Container>
        <S.Title>Sign in to your Account</S.Title>
        <S.SubTitle>Don’t have an account? <TouchableOpacity onPress={() => navigation.navigate('Register')}>
    <Text style={{ color: "#4D81E7" }}>Sign Up</Text>
  </TouchableOpacity>Sign Up</S.SubTitle>
      

        <S.Input1
          placeholder="Email"
          placeholderTextColor="black"
        />

        <S.Input2
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
        />

        <S.Button>
          <S.ButtonText>Log In</S.ButtonText>
        </S.Button>
    </S.Container>
  );
}
