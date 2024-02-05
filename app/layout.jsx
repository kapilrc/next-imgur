'use client'
import AppProvider from './providers/AppProvider';
import Navbar from './components/NavBar';
import './globals.css';
import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material';

const Container = styled(MuiContainer)(({ theme }) => ({
  marginTop: theme.spacing(12)
}));

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          <Container maxWidth="lg">{children}</Container>
        </AppProvider>
      </body>
    </html>
  );
}
