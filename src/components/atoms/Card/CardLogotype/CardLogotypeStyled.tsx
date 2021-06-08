import styled, { css, DefaultTheme } from 'styled-components'
import masterCardIconSource from '../../../../assets/icons/mastercard-logo.svg'

interface IProps {
  theme: DefaultTheme
  service: 'visa' | 'mastercard' | 'maestro' | 'mir'
}

const CardLogotypeStyled = styled.img.attrs(() => ({
  src: masterCardIconSource,
  alt: '',
}))<IProps>`
  ${() => css`
    width: 45px;
    height: auto;
  `}
`

export default CardLogotypeStyled
