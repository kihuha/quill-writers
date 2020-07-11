import React, { StrictMode } from "react"
import { Router } from "@reach/router"
import Home from "./pages/Home"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { size } from "./design/typography"
import { dark } from "./design/colors"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {font-size: 87.5%;} /*14px*/

  body {
    font-family: 'Tajawal', sans-serif;
    color: ${dark[100]};
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    line-height: 1.15;
    color: inherit;
  }

  h1 {
    font-size: ${size.level1};
  }

  h2 {font-size: ${size.level2}}

  h3 {font-size: ${size.level3}}

  h4 {font-size: ${size.level4}}

  h5 {font-size: ${size.level5}}

  p {
    font-size: ${size.level6};    
    color: ${dark[100]};
  }

  small, .text_small {font-size: ${size.level7}}

`

const App = (): JSX.Element => {
  return (
    <StrictMode>
      <GlobalStyles />
      <Router>
        <Home path="/" />
      </Router>
    </StrictMode>
  )
}

export default App
