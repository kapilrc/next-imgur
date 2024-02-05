'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from './ThemeProvider';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AppRouterCacheProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </Provider>
  );
};

export default AppProvider;
