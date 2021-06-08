import 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    colors: {
      purpleLinearGradient: string
      redLinearGradient: string
      backgroundColor: string
      whiteColor: string
    }
    sizes: {}
  }
}
