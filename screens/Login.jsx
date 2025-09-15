import { SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';
import * as S from '../style.js'; 
 

export default function Login() {
  return (
    <S.Container>
        <S.Title>Sign in to your Account</S.Title>
        <S.SubTitle>Don’t have an account? <Text style={{color: "#4D81E7"}}>Sign Up</Text></S.SubTitle>
      

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
