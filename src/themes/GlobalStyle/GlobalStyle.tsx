import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<IProps>`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    body,
    html {
      margin: 0 auto;
      padding: 0;
      color: ${theme.colors.whiteColor};
      background-color: ${theme.colors.backgroundColor};
      -webkit-font-smoothing: subpixel-antialiased;
    }
  `}
`

export default GlobalStyle
