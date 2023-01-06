import styled from 'styled-components';
import background from '../assets/pattern-bg.png';
import arrow from '../assets/icon-arrow.svg';
function Header() {
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
      </BackgroundImage>
    </div>
  );
}

export default Header;

const BackgroundImage = styled.div`
  background: url(${background});
  width: 100%;
  height: 170px;
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
`;

const SearchBar = styled.input`
  height: 58px;
  border-radius: 15px 0 0 15px;
  font-size: 18px;
  color: #2c2c2c;
  outline: none;
  border: none;
  margin-left: 24px;
  padding: 18px 24px;
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
