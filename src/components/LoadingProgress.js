import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({});

function LoadingProgress() {
  return (
    <span>
      <br />
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" variant="query" />
      <br />
      <LinearProgress />
    </span>
  );
}

export default withStyles(styles)(LoadingProgress);
