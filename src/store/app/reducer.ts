import { IAppState } from './types'

const initialState: IAppState = {
  isEnable: true,
}

const appReducer = (
  state: IAppState = initialState,
  action: { type: string } = { type: '' },
): IAppState => {
  switch (action.type) {
    default:
      return state
  }
}

export default appReducer
