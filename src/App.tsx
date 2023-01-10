import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Content from './components/Content';
import Header from './components/Header';

import GlobalStyles from './styles/GlobalStyles';

interface IpData {
  location: {
    lat: number;
    lng: number;
  };
}

const App: React.FC = () => {
  const [ip, setIp] = useState<any>('');
  const [ipData, setIpData] = useState<IpData | null>(null);

  return (
    <>
      <GlobalStyles />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header
        ip={ip}
        setIp={setIp}
        setIpData={setIpData}
      />

    </>
  );
};

export default App;
