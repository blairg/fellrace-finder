import React from 'react';
import Typography from '@material-ui/core/Typography';

const RaceDetails = ({race}) => (
    <div key={race.id}>
        <Typography variant="headline">
            {race.name} - {race.date}
        </Typography>
    </div>
);

// @TODO: Can parse all races and get info like elevation, location, hyperlink for race.

export default RaceDetails;