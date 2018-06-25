import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
            <Typography variant="headline" color='primary'>
                <Button variant="contained" color='primary'>
                    <a href={race.resultsUrl} target="_blank" className={classes.raceButton}>
                        {race.name} - {race.date}
                    </a>
                </Button>
            </Typography>
        </div>
    );
}

// @TODO: Can parse all races and get info like elevation, location, hyperlink for race.
export default withStyles(styles)(RaceDetails);