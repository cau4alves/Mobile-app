import styled from 'styled-components/native';

const Header = styled.View`
    background-color: #0D0D1B;
    width: 100%;
    height: 125px;
    border-radius: 0px 0px 20px 20px;
`;

const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #0D0D0D;
`;

const Title = styled.Text`
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Saira';
    color: white;
`;

const Cars = styled.View`
    background-color: white;
    justify-content: center;
    margin-top: 20px;
    width: 380px;
    height: 80px;
    border-radius: 20px;
    padding: 10px;
    border-radius: 20px;
`;

const StatusCar = styled.Text`
    font-family: 'Montserrat';
    font-size: 14px;
`;

const CarContainer = styled.View`
    
`;

const ButtonEntry = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 380px;
    background-color: #FEDD66;
    border-radius: 15px;
    margin-top: 190px;
`;

const ButtonExit = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 380px;
    background-color: #FEDD66;
    border-radius: 15px;
    margin-top: 10px;
`;

const ButtonTitle = styled.Text`
    font-size: 20px;
`;

export { Header, Container, Title, Cars, StatusCar, CarContainer, ButtonEntry, ButtonExit, ButtonTitle };