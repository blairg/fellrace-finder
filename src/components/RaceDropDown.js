import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

function RaceDropDown(props) {
  const { raceNames, chosenRace, onChange, classes } = props;

  let raceSelectItems = [
    <MenuItem key="all" value="all">
      All
    </MenuItem>,
  ];

  raceNames.map(eachRace => {
    raceSelectItems.push(
      <MenuItem key={eachRace.original} value={eachRace.original}>
        {eachRace.display}
      </MenuItem>,
    );
  });

  const raceSelector = (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="race-select">Race</InputLabel>
        <Select
          value={chosenRace}
          onChange={onChange}
          inputProps={{
            name: 'race',
            id: 'race-select',
          }}
        >
          {raceSelectItems}
        </Select>
      </FormControl>
    </React.Fragment>
  );

  return raceSelector;
}

export default withStyles(styles)(RaceDropDown);
