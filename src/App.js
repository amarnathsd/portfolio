import React from 'react'
import NavBar from './Components/NavBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from './Components/HeroSection';
import { Container } from '@mui/material';
import ProfileCard from './Components/ProfileCard';
import PricingSection from './Components/pricing';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar/>
      </ThemeProvider>
      <Container>
      <HeroSection/>
      </Container>
      <ProfileCard/>
      <Container>
      <PricingSection/>
      </Container>
      <PricingSection/>
    </>
  )
}

export default App