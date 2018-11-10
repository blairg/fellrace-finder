import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({});

function LoadMoreButton(props) {
  const { onClick } = props;

  return (
    <React.Fragment>
      <Button variant="contained" color="secondary" onClick={onClick}>
        Load More
      </Button>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default withStyles(styles)(React.memo(LoadMoreButton));
