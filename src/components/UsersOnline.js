import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PeopleIcon from "@material-ui/icons/People";

const styles = theme => ({
  scrollToBottomButton: {
    margin: theme.spacing.unit,
    position: "fixed",
    bottom: "5px",
    left: "1%",
    zIndex: "1"
  },
  numLoggedInContainer: {
    position: "absolute",
    top: "23px",
    right: "30px"
  },
  numLoggedInCount: {
    position: "relative",
    top: "-5px",
    paddingRight: "3px"
  }
});

function UsersOnline(props) {
  const { classes, count } = props;

  return (
    <span className={classes.numLoggedInContainer}>
      <span className={classes.numLoggedInCount}>{count}</span>
      <span>
        <PeopleIcon color="secondary" />
      </span>
    </span>
  );
}

export default withStyles(styles)(React.memo(UsersOnline));
