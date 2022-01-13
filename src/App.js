import React, { createContext } from 'react'
import { GridMovies } from './components/gridMovies/index'
import './styles/reset.css'
import { Container, Row } from './components/utilities/grid'
import './styles/typography.css'
import { theme } from './components/utilities/colors'

export const ThemeColors = createContext(theme.light);

function App() {

  return (
    <>
    <ThemeColors.Provider value={theme.light}>
      <Container bg={'0F1021'}>
        <Row width="80%">
          <GridMovies />
        </Row>
      </Container>
    </ThemeColors.Provider>
    </>
  );
}

export default App;

