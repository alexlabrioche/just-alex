import styled from "styled-components"

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-app-icon a {
    &:before {
      background: none;
    }
  }
  .nav-item-container {
    display: flex;
    align-items: center;
  }
  .nav-links {
    a {
      margin-right: 1.2rem;
      letter-spacing: ${({ theme }) => theme.letterSpacing.widest};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    a:last-of-type {
      margin-right: 2rem;
    }
  }

  @media screen and (min-width: ${p => p.theme.screens.md}) {
    .nav-links a {
      margin-right: 2rem;
    }
  }
  @media screen and (min-width: ${p => p.theme.screens.lg}) {
    .nav-links a {
      margin-right: 4rem;
    }
  }
`
export default NavigationWrapper
