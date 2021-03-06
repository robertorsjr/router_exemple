import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Head from './components/Head';
import Routes from './routes' 

function App() {
  return (
   <BrowserRouter>
      <Head/>
     <Routes/>
   </BrowserRouter>
  );
}

export default App;
