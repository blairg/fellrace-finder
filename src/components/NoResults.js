import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  noRaces: {
    marginRight: '10px',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: '5px',
  },
});

function NoResults(props) {
  const { classes } = props;

  return (
    <Paper className={classes.noRaces}>
      <Typography variant="subheading">
        No race results found for this runner!
      </Typography>
    </Paper>
  );
}

export default withStyles(styles)(NoResults);
