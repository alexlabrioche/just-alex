import styled from "styled-components"

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  padding: ${({ theme }) => theme.size[4]};
  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    padding: ${({ theme }) => theme.size[8]};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    padding: ${({ theme }) => theme.size[16]};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    padding: ${({ theme }) => theme.size[36]} ${({ theme }) => theme.size[48]};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    padding: ${({ theme }) => theme.size[36]} ${({ theme }) => theme.size[64]};
  }
`
export default PageContainer
