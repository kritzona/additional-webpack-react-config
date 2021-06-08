import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TextStyled = styled.div<IProps>`
  ${() => css`
    font-family: 'Cera Pro', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
  `}
`

export default TextStyled
