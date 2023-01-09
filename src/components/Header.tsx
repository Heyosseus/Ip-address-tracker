import styled from 'styled-components';
import background from '../assets/pattern-bg.png';
import arrow from '../assets/icon-arrow.svg';
import { useEffect, useState } from 'react';
function Header() {
  const [address, setAddress] = useState<any>('')
  useEffect(()=>{
    fetch(
      'https://geo.ipify.org/api/v2/country?apiKey=at_2NiRIrLpgf3LYLpAwm3VhOfGVjwxK&ipAddress=8.8.8.8'
    )
      .then((res) => res.json())
      .then((res) => setAddress(res.data))
      .catch((err) => console.error(err));
      console.log(address)
  },[])
  
  return (
    <div>
      <BackgroundImage>
        <Heading>iP address tracker</Heading>
        <Form>
          <SearchBar type="text"></SearchBar>
          <ArrowButton>
            <ArrowImage></ArrowImage>
          </ArrowButton>
        </Form>
        <Container>
          <LabelName>ip address</LabelName>
          <Infos>{address}</Infos>
          <LabelName>locations</LabelName>
          <Infos>Location Brooklyn, NY 10001</Infos>
          <LabelName>timezone</LabelName>
          <Infos>Timezone UTC -05:00</Infos>
          <LabelName>isp</LabelName>
          <Infos>ISP SpaceX Starlink</Infos>
        </Container>
      </BackgroundImage>
    </div>
  );
}

export default Header;

const BackgroundImage = styled.div`
  background: url(${background});
  width: 100%;
  height: 210px;
`;

const Heading = styled.h2`
  text-transform: capitalize;
  line-height: 80px;
  letter-spacing: 0.53px;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  margin: 0 2vw;
`;

const SearchBar = styled.input`
  width: 100vw;
  height: 58px;
  border-radius: 15px 0 0 15px;
  font-size: 18px;
  color: #2c2c2c;
  outline: none;
  border: none;
`;

const ArrowButton = styled.button`
  width: 58px;
  height: 58px;
  background: black;
  border: none;
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowImage = styled.div`
  background: url(${arrow});
  width: 12px;
  height: 14px;
`;

const Container = styled.div`
  width: 90vw;
  height: 274px;
  border-radius: 15px;
  background-color: white;
  box-shadow: #00000019;
  z-index: 99;
  position: relative;
  justify-items: center;
  margin: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const LabelName = styled.h3`
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  color: #2c2c2c;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 24px;
`;

const Infos = styled.p`
  font-size: 22px;
  line-height: 24px;
  align-items: center;
  color: #2c2c2c;
  font-weight: 900;
`;
