import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme, GlobalStyle } from 'styles';
import { muiTheme } from 'styles';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { MediaContextProvider, useSetDocumentTitle } from 'hooks/ui';
import { AppRouter } from './AppRouter';
import '../../translation/i18n';

const App = () => {
  

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <MediaContextProvider>
          <AppRouter />
        </MediaContextProvider>
      </MuiThemeProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
