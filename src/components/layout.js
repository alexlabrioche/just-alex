import React from "react"
import Appbar from "../components/navigation/appbar"
import styled from "styled-components"

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
    <LayoutWrapper>
      <Appbar home={location.pathname === "/"} />
      {children}
    </LayoutWrapper>
  )
}

export default Layout
