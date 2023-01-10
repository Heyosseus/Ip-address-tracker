import styled from 'styled-components';
import background from '../assets/pattern-bg.png';
import arrow from '../assets/icon-arrow.svg';
import { ReactEventHandler, useEffect, useState } from 'react';
import Content from './Content';

interface Props {
  ip: any;
  setIp: any;
  setIpData: any;
}
interface IpData {
  location: {
    lat: number;
    lng: number;
  };
}
const Header: React.FC<Props> = ({
  ip,
  setIp,
  ipData,
  setIpData,
}: any) => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const [location, setLocation] = useState<any>('');
  const [city, setCity] = useState('');
  const [timezone, setTimezone] = useState();
  const [isp, setIsp] = useState<string>('');
  const [lat, setLat] = useState(41.71);
  const [long, setLong] = useState(44.82);

  useEffect(() => {
    async function fetchAddress() {
      try {
        const res = await fetch(`http://ip-api.com/json/`);
        const data = await res.json();
        setIpAddress(data.query);
        setLocation(data.country);
        setCity(data.city);
        setTimezone(data.timezone);
        setIsp(data.isp);
        setIpData(data);
        setLat(data.lat);
        setLong(data.lon);
      } catch (err) {
        console.error(err);
      }
    }

    fetchAddress();
  }, []);

  
    async function handleClick() {
      try {
        const res = await fetch(`http://ip-api.com/json/${ip}`);
        const forUser = await res.json();
        setIpAddress(forUser.query);
        setLocation(forUser.country);
        setCity(forUser.city);
        setTimezone(forUser.timezone);
        setIsp(forUser.isp);
        setIpData(forUser);
        setLat(forUser.lat);
        setLong(forUser.lon);
      } catch (err) {
        console.error(err);
      }
    }

   

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <BackgroundImage>
        <Heading>iP address tracker</Heading>
        <Form onSubmit={handleSubmit}>
          <SearchBar
            type="text"
            placeholder="Search for any IP address"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          ></SearchBar>
          <ArrowButton onClick={handleClick}>
            <ArrowImage></ArrowImage>
          </ArrowButton>
        </Form>
        <Container>
          <div>
            <LabelName>ip address</LabelName>
            <Infos>{ipAddress}</Infos>
          </div>
          <Line></Line>
          <div>
            <LabelName>location</LabelName>
            <Infos>
              {location} {city}
            </Infos>
          </div>
          <Line></Line>
          <div>
            <LabelName>timezone</LabelName>
            <Infos>{timezone}</Infos>
          </div>
          <Line></Line>
          <div>
            <LabelName>isp</LabelName>
            <Infos>
              {isp.length > 16 ? 'Various Registries' : isp}
            </Infos>
          </div>
        </Container>
      </BackgroundImage>
      <Content lat={lat} long={long}/>
    </div>
  );
};

export default Header;

const BackgroundImage = styled.div`
  background: url(${background});
  width: 100%;
  height: 210px;
  @media (min-width: 678px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    height: 300px;
  }
`;

const Heading = styled.h2`
  text-transform: capitalize;
  line-height: 80px;
  letter-spacing: 0.53px;
  display: flex;
  justify-content: center;
  color: white;
  @media (min-width: 678px) {
    color: white;
    font-size: 32px;
  }
`;

const Form = styled.form`
  display: flex;
  margin: 0 2vw;
  @media (min-width: 678px) {
    display: flex;
    align-items: center;
  }
`;

const SearchBar = styled.input`
  width: 100vw;
  height: 58px;
  border-radius: 15px 0 0 15px;
  font-size: 18px;
  color: #2c2c2c;
  outline: none;
  border: none;
  padding-left: 24px;
  &::placeholder {
    font-weight: 100;
  }

  @media (min-width: 678px) {
    width: 555px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  height: 284px;
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
  text-align: center;
  @media (min-width: 678px) {
    width: 75vw;
    padding: 28px ;
    align-items: center;
    text-align: center;

  }
  @media (min-width: 1024px) {
    width: 65vw;
    display: flex;
    flex-direction: row;
    padding: 28px ;
    justify-content: space-between;
    align-items: center;
  }
`;

const LabelName = styled.h3`
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  color: #2c2c2c;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 24px;
  @media (min-width: 678px) {
    text-align: center;
    font-size: 12px;
    opacity: .8;
    margin-bottom: 16px;
    margin-top: 6px;
  }
  @media (min-width: 1024px) {
    text-align: left;
    font-size: 12px;
    opacity: .8;
    margin-bottom: 16px;
    margin-top: 0;
  }
`;

const Line = styled.div`
@media (min-width: 1024px){
  width: 1px;
  height: 85px;
  background: black;
  opacity: 15%;
}
`

const Infos = styled.p`
  font-size: 22px;
  line-height: 24px;
  align-items: center;
  color: #2c2c2c;
  font-weight: 900;
  margin-top: 6px;
  @media (min-width: 678px) {
    font-size: 22px;
  }
`;
