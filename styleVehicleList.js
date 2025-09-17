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
`;

const Title = styled.Text`
margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Saira';
    color: #333E63;
`;

const Cars = styled.View`
    justify-content: center;
    margin-top: 20px;
    width: 400px;
    height: 80px;
    border: 1.5px solid black;
    border-radius: 20px;
    padding: 10px;
`;

const StatusCar = styled.Text`
    font-family: 'Montserrat';
    font-size: 14px;
`;

const CarContainer = styled.View`
    
`;

export { Header, Container, Title, Cars, StatusCar, CarContainer };