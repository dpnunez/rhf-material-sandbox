import React from 'react';
import { createMuiTheme, ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components'
import { Home } from './routes/Home'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffe5c4;
  }
`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6b3074'
    },
    secondary: {
      main: '#86a3c3'
    }
  }
})


const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </StylesProvider>
  )
}


export default App;
