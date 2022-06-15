import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string
      secondary: string
      backgrounds: {
        light: string
        contrasted: string
      }
      texts: {
        dark: string
        light: string
      }
    }
    spacing: {
      s050: string
      s100: string
      s200: string
      s250: string
      s300: string
      s400: string
    }
    elevation: {
      z0: string
      z1: string
    }
    breakpoint: {
      tablet: string
      desktop: string
    }
  }
}
