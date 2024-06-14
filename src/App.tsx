import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/themes/Default"

import { BrowserRouter } from 'react-router-dom'
import {Router} from './routes';

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </ThemeProvider>
 
)
}

export default App
