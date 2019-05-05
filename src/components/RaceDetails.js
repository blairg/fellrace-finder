import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EjectIcon from '@material-ui/icons/Eject';

const styles = {
  raceButton: {
    textDecoration: 'none',
    zIndex: '1 !important',
    color: 'white',
  },
};

function RaceDetails(props) {
  const { classes, race } = props;

  return (
    <div key={race.id}>
      <Typography variant="headline" color="primary">
        <Button variant="extendedFab" color="primary">
          <EjectIcon />
          <a
            href={race.resultsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.raceButton}
          >
            {race.name} - {race.date}
          </a>
        </Button>
      </Typography>
    </div>
  );
}

export default withStyles(styles)(React.memo(RaceDetails));
