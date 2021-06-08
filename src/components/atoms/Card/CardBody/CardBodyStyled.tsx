import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  side: 'front' | 'back'
  background: 'purple' | 'red'
}

const CardBodyStyled = styled.div<IProps>`
  ${({ theme, side, background }) => css`
    width: ${side === 'front' ? 315 : 145}px;
    height: 184px;

    background: linear-gradient(
      ${background === 'purple'
        ? theme.colors.purpleLinearGradient
        : theme.colors.redLinearGradient}
    );

    padding: ${side === 'front' ? 30 : 20}px;
    border-radius: ${theme.sizes.borderRadius}px;
  `}
`

export default CardBodyStyled
