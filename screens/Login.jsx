import { SafeAreaView, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import * as S from '../styleLogin.js';
import { useNavigation } from '@react-navigation/native';
 

export default function Login() {
    const navigation = useNavigation()
    return (
    <S.Container>
       

        <S.Title>Sign in to your Account</S.Title>
        <S.SubTitle>Don’t have an account? 
    <Text style={{ color: "#4D81E7" }}>Sign Up</Text></S.SubTitle>
      

        <S.Input1
          placeholder="Email"
          placeholderTextColor="black"
        />

        <S.Input2
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
        />

        <S.Button onPress={() => navigation.navigate("Home")}>
          <S.ButtonText>Log In</S.ButtonText>
        </S.Button>
    </S.Container>
  );
}
