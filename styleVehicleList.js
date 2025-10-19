import styled from 'styled-components/native';

const Header = styled.View`
  background-color: #0D0D1B;
  width: 100%;
  height: 125px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #0D0D0D;
  padding: 20px;
`;

const Title = styled.Text`
  margin-top: 25px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Saira';
  color: white;
  text-align: center;
`;

const Cars = styled.View`
  background-color: #1C1C1C;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 90%;
  min-height: 80px;
  border-radius: 15px;
  padding: 15px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
  elevation: 3;
`;

const StatusCar = styled.Text`
  font-family: 'Montserrat';
  font-size: 15px;
  color: #FEDD66;
  text-align: center;
`;

const CarContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonEntry = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 90%;
  background-color: #FEDD66;
  border-radius: 15px;
  margin-top: 30px;
`;

const ButtonExit = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 90%;
  background-color: #FEDD66;
  border-radius: 15px;
  margin-top: 15px;
`;

const ButtonTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #0D0D0D;
  font-family: 'Montserrat';
`;

export {
  Header,
  Container,
  Title,
  Cars,
  StatusCar,
  CarContainer,
  ButtonEntry,
  ButtonExit,
  ButtonTitle,
};
