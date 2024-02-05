import { ThemeProvider as MuiProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';

const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      html: { margin: 0, padding: 0, height: '100%', fontSize: '18px' },
      body: {
        margin: 0,
        padding: 0,
        height: '100%',
        width: '100%',
        position: 'relative'
      },
      '#root': { height: '100%' },
      '*': { boxSizing: 'border-box' },
      a: { color: 'inherit', textDecoration: 'none' },
      '.MuiDialogActions-root': { justifyContent: 'center !important' },
      '&::-webkit-scrollbar': {
        width: 7,
        height: 5
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.15)`
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'silver',
        borderRadius: '5px'
      }
    }}
  />
);

export const ThemeProvider = ({ children }) => (
  <MuiProvider theme={theme}>
    <CssBaseline />
    {inputGlobalStyles}

    {children}
  </MuiProvider>
);
