import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FrontCardStyled = styled.div<IProps>`
  ${() => css``}
`

export default FrontCardStyled
