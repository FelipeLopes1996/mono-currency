import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --header-height: 4rem;
    --footer-height: 2rem;
    --navleft-width-close: 6rem;
    --navleft-width-open: 13.6rem;
  }

  body {
    font-size: 1rem;
    font-family: 'Roboto', 'Roboto', sans-serif;
    background: ${props => props.theme.bg.body};
    color: ${props => props.theme.fg.body};

    transition: background .6s ease-in-out, color .6s;
  }
`
