import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0D0D1B;
`;

const Title = styled.Text`
  color: white;
  font-family: 'Inter';
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubTitle = styled.Text`
  color: white;
  font-family: 'Inter';
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

const Input1 = styled.TextInput`
  font-family: 'Inter';
  width: 350px;
  padding: 12px;
  border-radius: 8px 8px 0px 0px;
  color: black;
  border: 0.5px solid lightgray;
  background-color: white;
`;

const Input2 = styled.TextInput`
  font-family: 'Inter';
  width: 350px;
  padding: 12px;
  border-radius: 0px 0px 8px 8px;
  color: black;
  border: 1px solid lightgray;
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

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export { Container, SubTitle, Title, Input1, Input2, Button, ButtonText };
