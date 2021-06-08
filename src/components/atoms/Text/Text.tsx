import React, { FunctionComponent } from 'react'
import TextStyled from './TextStyled'

interface IProps {
  children?: React.ReactNode
}

const Text: FunctionComponent<IProps> = ({ children }) => {
  return <TextStyled size="normal">{children}</TextStyled>
}

export default Text
