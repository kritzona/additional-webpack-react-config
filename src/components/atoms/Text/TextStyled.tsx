import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  size: 'large' | 'normal' | 'small'
}

const TextStyled = styled.div<IProps>`
  ${({ theme, size }) => css`
    font-family: 'Cera Pro', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;

    ${size === 'large' &&
    css`
      font-size: ${theme.sizes.largeFontSize}px;
    `}
    ${size === 'normal' &&
    css`
      font-size: ${theme.sizes.normalFontSize}px;
    `}
    ${size === 'small' &&
    css`
      font-size: ${theme.sizes.smallFontSize}px;
    `}
  `}
`

export default TextStyled
