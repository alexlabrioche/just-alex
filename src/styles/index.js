import { createGlobalStyle, css } from "styled-components"
import darkTheme from "./darkTheme"

const base = css`
  body {
    font-family: ${({ theme }) => theme.fontFamily.sans};
    color: ${({ theme }) => theme.colors.baseFont};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    font-size: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxxxxxl};
      font-family: ${({ theme }) => theme.fontFamily.sans};
      color: ${({ theme }) => theme.colors.green[500]};
    }
    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxxxxl};
      font-family: ${({ theme }) => theme.fontFamily.sans};
      text-transform: none;
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSize.xxxxl};
      font-family: ${({ theme }) => theme.fontFamily.sans};
      text-transform: none;
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      font-family: ${({ theme }) => theme.fontFamily.sans};
      text-transform: none;
    }
    h5 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      font-family: ${({ theme }) => theme.fontFamily.sans};
      text-transform: none;
    }
    h6 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-family: ${({ theme }) => theme.fontFamily.sans};
      text-transform: none;
    }
    i {
      font-style: italic;
    }
    p,
    i,
    li {
      line-height: 1.6em;
    }
    a {
      color: ${({ theme }) => theme.colors.baseFont};
      position: relative;
      box-shadow: none;
      &:before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        width: auto;
        height: 2px;
        background: ${({ theme }) => theme.colors.green[200]};
        transition: all 200ms;
        z-index: -1;
      }

      &:hover:before {
        height: 100%;
      }
      &:active:before {
        height: 100%;
      }
    }
  }
  *::selection {
    background: ${({ theme }) => theme.colors.green[300]};
  }
  blockquote {
    margin-left: 0;
  }
  ul,
  ol {
    margin-left: 0;
    list-style-type: none;
  }
  nav {
    height: ${({ theme }) => theme.size[20]};
    padding: ${({ theme }) => theme.size[4]};
  }
  #nav-theme-icon,
  #nav-app-logo {
    fill: ${({ theme }) => theme.colors.baseFont};
  }
`
const mediaQueries = css`
  @media screen and (min-width: ${p => p.theme.screens.sm}) {
  }
  @media screen and (min-width: ${p => p.theme.screens.md}) {
    body {
      font-size: 112.5%;
      nav {
        height: ${({ theme }) => theme.size[24]};
        padding: ${({ theme }) => theme.size[5]};
      }
      a {
        &:before {
          bottom: -2px;
          height: 10px;
        }
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    nav {
      height: ${({ theme }) => theme.size[28]};
      padding: ${({ theme }) => theme.size[6]};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
  }
`

const GlobalStyle = createGlobalStyle`
  ${base}
  ${darkTheme}
  ${mediaQueries}
`
export default GlobalStyle
