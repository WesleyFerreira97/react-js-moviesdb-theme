import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

export function StyledProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
