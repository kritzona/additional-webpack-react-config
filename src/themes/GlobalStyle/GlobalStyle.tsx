import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<IProps>`
  ${() => css`
    * {
      box-sizing: border-box;
    }

    body,
    html {
      margin: 0 auto;
      padding: 0;
      color: #333333;
      background-color: #ffffff;
      -webkit-font-smoothing: subpixel-antialiased;
    }
  `}
`

export default GlobalStyle
