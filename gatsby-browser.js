// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "prismjs/themes/prism.css"
import React from "react"
import { DarkModeProvider } from "./src/context/darkModeContext"
import { ThemeProvider } from "styled-components"
import theme from "./src/theme/"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <DarkModeProvider>{element}</DarkModeProvider>
  </ThemeProvider>
)
