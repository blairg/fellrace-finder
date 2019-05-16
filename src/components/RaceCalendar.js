/* global window */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import "react-big-calendar/lib/css/react-big-calendar.css";

//import { getSession, setSession, removeSession } from './../service/storageService';

const localizer = BigCalendar.momentLocalizer(moment);

const styles = theme => ({
  bigRaceCalendar: {
    minHeight: "400px"
  },
  short: {
    backgroundColor: "lightgreen",
    color: "black",
    marginRight: "2px"
  },
  medium: {
    backgroundColor: "orange",
    color: "black",
    marginRight: "2px"
  },
  long: {
    backgroundColor: "red",
    color: "white"
  }
});

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const propGetter = (event, start, end, isSelected) => {
  // @TODO: Attempt at trying to make the name open the race in a new tab.
  // const cacheKey = 'RaceCalendar.propGetter';

  // if (isSelected) {
  //   console.log(event.url, isSelected);
  //   const cachedValue = getSession(cacheKey);

  //   if (cachedValue && cachedValue === event.url) {
  //     removeSession(cacheKey);
  //   }

  //   if (cachedValue && cachedValue !== event.url) {
  //     removeSession(cacheKey);
  //     window.open(event.url, '', null, false);
  //   }

  //   if (!cachedValue) {
  //     setSession({key: cacheKey, value: event.url});
  //     window.open(event.url, '', null, false);
  //   }
  //   //console.log(event);
  // } else {
  //   removeSession(cacheKey);
  // }

  let newStyle = {
    backgroundColor: "lightgrey",
    color: "black",
    borderRadius: "0px",
    border: "none"
  };

  if (event.short) {
    newStyle.backgroundColor = styles().short.backgroundColor;
    newStyle.color = styles().short.color;
  }

  if (event.medium) {
    newStyle.backgroundColor = styles().medium.backgroundColor;
    newStyle.color = styles().medium.color;
  }

  if (event.long) {
    newStyle.backgroundColor = styles().long.backgroundColor;
    newStyle.color = styles().long.color;
  }

  return {
    className: "",
    style: newStyle
  };
};

function RaceCalendar(props) {
  const { classes, events } = props;

  if (!events) {
    return (
      <div>
        <CircularProgress className={classes.bigRaceCalendar} />
      </div>
    );
  }

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar className={classes.short} alt="Short Races">
          S
        </Avatar>
        <Avatar className={classes.medium} alt="Medium Races">
          M
        </Avatar>
        <Avatar className={classes.long} alt="Long Races">
          L
        </Avatar>
      </Grid>
      <br />
      <br />
      <BigCalendar
        popup
        className={classes.bigRaceCalendar}
        events={events}
        views={allViews}
        timeslots={4}
        showMultiDayTimes
        defaultView={BigCalendar.Views.MONTH}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        scrollToTime={new Date(1970, 1, 1, 6)}
        localizer={localizer}
        eventPropGetter={propGetter}
      />
      <br />
      <br />
      <br />
    </div>
  );
}

export default withStyles(styles)(React.memo(RaceCalendar));
