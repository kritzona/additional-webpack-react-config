import React, { FunctionComponent } from 'react'
import AppStyled from './AppStyled'
import FrontCard from './components/molecules/FrontCard/FrontCard'

const App: FunctionComponent = () => {
  return (
    <AppStyled>
      <FrontCard />
    </AppStyled>
  )
}

export default App
