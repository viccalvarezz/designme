import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    yellow: {
      "50": "#FEF5E7",
      "100": "#FBE3BB",
      "200": "#F9D190",
      "300": "#F6BF65",
      "400": "#F4AD39",
      "500": "#F19B0E",
      "600": "#C17C0B",
      "700": "#915D08",
      "800": "#613E05",
      "900": "#301F03"
    },
    cream: {
      "50": "#F9F3EB",
      "100": "#F0DCC7",
      "200": "#E6C6A3",
      "300": "#DCB07F",
      "400": "#D2995B",
      "500": "#C88337",
      "600": "#A0692C",
      "700": "#784F21",
      "800": "#503416",
      "900": "#281A0B"
    },
    lightPink: {
      "50": "#FBECE9",
      "100": "#F5C9C2",
      "200": "#EEA69A",
      "300": "#E88373",
      "400": "#E1614C",
      "500": "#DB3E24",
      "600": "#AF321D",
      "700": "#832516",
      "800": "#57190F",
      "900": "#2C0C07"
    },
    green: {
      "50": "#F0F4F3",
      "100": "#D6E1DE",
      "200": "#BBCDC9",
      "300": "#A1BAB4",
      "400": "#86A79F",
      "500": "#6C938A",
      "600": "#56766E",
      "700": "#415853",
      "800": "#2B3B37",
      "900": "#161D1C"
    },
    darkPink: {
      "50": "#FDE8E8",
      "100": "#F8BFBE",
      "200": "#F49695",
      "300": "#F06E6B",
      "400": "#EB4542",
      "500": "#E71C18",
      "600": "#B91613",
      "700": "#8B110E",
      "800": "#5C0B0A",
      "900": "#2E0605"
    }
  },
  fonts,
  breakpoints,
})

export default theme
