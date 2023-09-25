import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { TasksProvider } from '../contexts/TasksContext';
import { FiltersProvider } from '../contexts/FiltersContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <FiltersProvider>
        <TasksProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </TasksProvider>
      </FiltersProvider>
    </ThemeProvider>
  );
}

export default MyApp;
