import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FrontCardStyled = styled.div<IProps>`
  ${() => css`
    width: max-content;
  `}
`

export default FrontCardStyled
