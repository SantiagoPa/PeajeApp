import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { ReactElement } from "react"
import { purpleTheme } from "./purpleTheme"

interface ThemeProps{
    children: ReactElement | ReactElement[]
}

export const AppTheme = ({children}:ThemeProps) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
