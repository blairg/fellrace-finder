// Polyfills
import 'intersection-observer';

import React, { PureComponent, Suspense } from 'react';
import { LazyImage } from 'react-lazy-images';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

// Font 
import 'typeface-roboto';

import runnerImage from './images/runner.png';
import lowResRunnerImage from './images/runnerlowres.jpg';

const Main = React.lazy(() => import('./containers/Main'));

// Styles
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '-30px',
    backgroundColor: 'white',
  },
};

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <meta name="Description" content="Application which allow to search for a runner and it displays the results for the fell races they have completed."></meta>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//storage.googleapis.com" />
        <link rel="dns-prefetch" href="//fellrace-finder-server.herokuapp.com" />
        <link
          href="//storage.googleapis.com"
          rel="preconnect"
          crossOrigin="true"
        />
        <link
          href="//fellrace-finder-server.herokuapp.com"
          rel="preconnect"
          crossOrigin="true"
        />
        <div style={styles.container}>
          <header>
            <LazyImage
                  src={runnerImage}
                  alt="stickman runner"
                  placeholder={({ imageProps, ref }) => (
                    <img ref={ref} src={lowResRunnerImage} alt={imageProps.alt} />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
          </header>
          <main>
          <Suspense fallback={<CircularProgress />}>
            <Main />
          </Suspense>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
