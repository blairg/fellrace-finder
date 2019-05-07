import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BigCalendar from 'react-big-calendar';

const styles = theme => ({
//   scrollToBottomButton: {
//     margin: theme.spacing.unit,
//     position: 'fixed',
//     bottom: '5px',
//     left: '1%',
//     zIndex: '1'
//   },
});

function RaceCalendar(props) {
  const { classes } = props;

  return (
    <BigCalendar
    // events={events}
    // views={allViews}
    step={60}
    showMultiDayTimes
    // max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date()}
    // localizer={localizer}
  />
  );
}

export default withStyles(styles)(React.memo(RaceCalendar));
