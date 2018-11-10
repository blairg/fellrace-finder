import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const styles = theme => ({
  scrollToTopButton: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '5px',
    right: '1%',
  },
});

function UpwardArrowButton(props) {
  const { classes, onClick } = props;

  return (
    <span className={classes.scrollToTopButton}>
      <Button variant="fab" color="secondary" onClick={onClick}>
        <ArrowUpwardIcon />
      </Button>
    </span>
  );
}

export default withStyles(styles)(React.memo(UpwardArrowButton));
