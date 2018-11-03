import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const styles = theme => ({
  scrollToBottomButton: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '5px',
    left: '1%',
  },
});

function ArrowDownwardButton(props) {
  const { classes, onClick } = props;

  return (
    <span className={classes.scrollToBottomButton}>
      <Button variant="fab" color="secondary" onClick={onClick}>
        <ArrowDownwardIcon />
      </Button>
    </span>
  );
}

export default withStyles(styles)(React.memo(ArrowDownwardButton));
