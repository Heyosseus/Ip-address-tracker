import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Content from './components/Content';
import Header from './components/Header';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <Content />
    </>
  );
}

export default App;
