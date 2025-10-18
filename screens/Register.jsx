import { SafeAreaView, Text } from "react-native";
import * as S from '../styleRegister';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";

export default function Register() {
    const navigation = useNavigation()

    return (
        <S.Container>
            <StatusBar hidden />
            <S.Title>Create Account</S.Title>
            <S.SubTitle>Already have an account? <Text onPress={() => navigation.navigate("Login")} style={{ color: "#4D81E7" }}>Sign In</Text></S.SubTitle>
            <S.Input1
                placeholder="Username"
                placeholderTextColor="black"
            />
            <S.Input 
                placeholder="Email"
                placeholderTextColor="black"
            />
            <S.Input2
                placeholder="Password"
                placeholderTextColor="black"
            />
            <S.Button>
                <Text style={{ color: "white", fontSize: 16 }}>Register</Text>
            </S.Button>
        </S.Container>
    )
}