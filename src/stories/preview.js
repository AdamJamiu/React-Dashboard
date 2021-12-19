import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => <ThemeProvider theme="default">
    <Story/>
  </ThemeProvider>
]
