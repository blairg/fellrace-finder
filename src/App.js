import React, { Component } from 'react';
import Search from './components/Search';
import runnerImage from './runner.png';
//import './App.css';

// Theme
// import { deepOrange500 } from 'material-ui/styles/colors'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

// Font
import 'typeface-roboto';

// Click handler
// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin()

// Styles
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
  }
};

// Theme
// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500
//   }
// });

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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <div style={styles.container}>
          <header className="App-header">
            <img src={runnerImage} className="App-logo" alt="runner" />
            {/* <h1 className="App-title">Fell Race</h1> */}
          </header>
          <main>
            <br />
            <Search />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
