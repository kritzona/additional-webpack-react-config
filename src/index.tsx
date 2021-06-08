import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store/store'
import App from './App'
import './index.scss'
import GlobalStyle from './themes/GlobalStyle/GlobalStyle'
import DarkTheme from './themes/DarkTheme/DarkTheme'

const rootElement: HTMLElement | null = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  rootElement,
)
