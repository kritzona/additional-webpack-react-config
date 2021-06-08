import React, { FunctionComponent } from 'react'
import FrontCardStyled from './FrontCardStyled'
import CardBody from '../../atoms/Card/CardBody/CardBody'
import CardLogotype from '../../atoms/Card/CardLogotype/CardLogotype'

const FrontCard: FunctionComponent = () => {
  return (
    <FrontCardStyled>
      <CardBody>
        <CardLogotype />
      </CardBody>
    </FrontCardStyled>
  )
}

export default FrontCard
