import React from 'react';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import ClearAllIcon from '@material-ui/icons/ClearAll';

const clearButtonTheme = createMuiTheme({
  palette: {
    primary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
});

const styles = theme => ({
  scrollToBottomButton: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '5px',
    left: '1%',
  },
});

function ClearButton(props) {
  const { classes, onClick } = props;
  const clearButton = (
    <MuiThemeProvider theme={clearButtonTheme}>
      <Button
        variant="fab"
        color="primary"
        className={classes.clearButton}
        onClick={onClick}
      >
        <ClearAllIcon />
      </Button>
    </MuiThemeProvider>
  );

  return clearButton;
}

export default withStyles(styles)(ClearButton);
