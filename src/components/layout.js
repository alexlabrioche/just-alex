import React from "react"
import Appbar from "../components/navigation/appbar"
import styled from "styled-components"
import { DarkModeProvider } from "../context/darkModeContext"
import { ThemeProvider } from "styled-components"
import theme from "../theme/"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function Layout({ location, children }) {
  return (
    <ThemeProvider theme={theme}>
      <DarkModeProvider>
        <LayoutWrapper>
          <Appbar home={location.pathname === "/"} />
          {children}
        </LayoutWrapper>
      </DarkModeProvider>
    </ThemeProvider>
  )
}

export default Layout
