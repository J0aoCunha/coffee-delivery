import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 *{
  margin: 0;
  border: 0;
  box-sizing: border-box;
 }

 :focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
 }

 body{
  background:${(props) => props.theme.background};
  color: black;
  -webkit-font-smoothing: antialiased;
 }

 body, input, button, textarea{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`
