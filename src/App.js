import React, { PureComponent } from 'react';
import Search from './components/Search';
import runnerImage from './runner.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

// Font
import 'typeface-roboto';

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
        <link
          href="//storage.googleapis.com"
          rel="preconnect"
          crossOrigin="true"
        />
        <div style={styles.container}>
          <header>
            <img src={runnerImage} alt="runner" />
          </header>
          <main>
            <Search />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
