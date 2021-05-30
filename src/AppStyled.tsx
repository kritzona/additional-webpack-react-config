import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const AppStyled = styled.div<IProps>`
  ${() => css``}
`

export default AppStyled
