import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import * as S from '../style.js';

export default function Login() {
  return (
    <S.Container>
      <Text>Sign in to your Account</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <TouchableOpacity>
        <Text>Log In</Text>
      </TouchableOpacity>
    </S.Container>
  );
}