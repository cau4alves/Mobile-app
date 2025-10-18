import styled from 'styled-components/native';

const Container = styled.View`
    background-color: #0D0D0D;
    flex: 1;
    align-items: center;
`;

const Title = styled.Text`
    margin-top: 20px;
    color: white;
    text-align: center;
    font-size: 24px;
`;

const Input = styled.TextInput`
    width: 380px;
    background-color: white;
    height: 80px;
    border-radius: 20px;
    padding: 20px;
    font-size: 20px;
    margin-top: 350px;
`;

const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 380px;
    background-color: #FEDD66;
    border-radius: 15px;
    margin-top: 10px;
`;

const ButtonTitle = styled.Text`
    font-size: 20px;
`;


export { Container, Title, Input, Button, ButtonTitle }