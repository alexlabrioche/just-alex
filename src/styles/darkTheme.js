import { css } from "styled-components"

const darkTheme = ({ dark }) =>
  dark &&
  css`
    body {
      background-color: ${({ theme }) => theme.colors.gray[800]};
      color: ${({ theme }) => theme.colors.gray[100]};
      a {
        color: ${({ theme }) => theme.colors.gray[100]};
        &:before {
          opacity: 0.8;
          background: ${({ theme }) => theme.colors.green[800]};
        }
      }
    }
    nav {
      #nav-theme-icon,
      #nav-app-logo {
        fill: ${({ theme }) => theme.colors.gray[300]};
      }
    }
  `
export default darkTheme
