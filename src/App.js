import React from 'react'
// import './styles/globalStyles.css'
import { Home } from './pages/home/index'
import { Footer } from './components/footer/index'
import { GlobalStyle } from './styles/global.ts'
import { StyledProvider } from './providers/StyledProvider'

function App() {

  return (
    <StyledProvider>
      <GlobalStyle />
      <Home />
      <Footer />
    </StyledProvider>
  );
}

export default App;

