import React from 'react'
import './styles/globalStyles.css'
import { Home } from './pages/home/index'
import { Footer } from './components/footer/index'
import { GlobalStyle } from './styles/global.ts'

function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
      <Footer />
    </>
  );
}

export default App;

