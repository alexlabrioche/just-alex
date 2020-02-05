import React from "react"
import styled from "styled-components"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

function Grid({ children }) {
  return <StyledGrid>{children}</StyledGrid>
}

export default Grid
