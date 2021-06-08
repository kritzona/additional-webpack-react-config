import React, { FunctionComponent, ReactNode } from 'react'
import PropTypes from 'prop-types'
import CardBodyStyled from './CardBodyStyled'

interface IProps {
  children?: ReactNode
}

const CardBody: FunctionComponent<IProps> = ({ children }) => {
  return (
    <CardBodyStyled side="front" background="purple">
      {children}
    </CardBodyStyled>
  )
}
CardBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardBody
