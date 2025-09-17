import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #0D0D1B;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
`;

const SubTitle = styled.Text`
    color: white;
    font-size: 16px;
    margin-bottom: 20px;
`;

const Input = styled.TextInput`
    width: 350px;
    padding: 12px;
    color: black;
    border: 0.5px solid lightgray;
    background-color: white;
`;

const Input1 = styled.TextInput`
    width: 350px;
    padding: 12px;
    border-radius: 8px 8px 0px 0px;
    color: black;
    border: 0.5px solid lightgray;
    background-color: white;
    margin-top: 20px;
`;

const Input2 = styled.TextInput`
    width: 350px;
    padding: 12px;
    border-radius: 0px 0px 8px 8px;
    color: black;
    border: 0.5px solid lightgray;
    background-color: white;
`;

const Button = styled.TouchableOpacity`
    background-color: #007bff;
    padding: 12px;
    border-radius: 5px;
    width: 350px;
    align-items: center; 
    margin-top: 20px;
`;

export { Container, Title, SubTitle, Input , Input1, Input2, Button };