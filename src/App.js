import React, { Component } from 'react';
import Search from './components/Search';
import runnerImage from './runner.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
// import red from '@material-ui/core/colors/red';
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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
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
