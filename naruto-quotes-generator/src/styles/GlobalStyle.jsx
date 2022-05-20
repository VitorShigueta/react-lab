import { createGlobalStyle } from 'styled-components'
import bgImg from '../assets/images/bg.jpeg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family:  'New Tegomin', serif;
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
  }
`

export {GlobalStyle}