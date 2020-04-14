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
    minHeight: "450px"
  },
  short: {
    backgroundColor: "#946F00",
    color: "white",
    marginRight: "2px"
  },
  medium: {
    backgroundColor: "#FFD799",
    color: "black",
    marginRight: "2px"
  },
  long: {
    backgroundColor: "#70A5FE",
    color: "white",
    marginRight: "2px"
  },
  cancelled: {
    backgroundColor: "white",
    color: "black",
    marginRight: "2px",
    borderStyle: "solid",
    border: "3px",
    borderColor: "#3d2d01"
  },
  postponed: {
    backgroundColor: "white",
    color: "black",
    borderStyle: "solid",
    border: "3px",
    borderColor: "blue"
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
    backgroundColor: "#918f8f",
    color: "black",
    borderRadius: "0px",
    border: "none"
  };

  if (event.short) {
    newStyle.outline = "2px solid #946F00";
    newStyle.backgroundColor = styles().short.backgroundColor;
    newStyle.color = styles().short.color;
  }

  if (event.medium) {
    newStyle.outline = "2px solid #FFD799";
    newStyle.backgroundColor = styles().medium.backgroundColor;
    newStyle.color = styles().medium.color;
  }

  if (event.long) {
    newStyle.outline = "2px solid #70A5FE";
    newStyle.backgroundColor = styles().long.backgroundColor;
    newStyle.color = styles().long.color;
  }

  if (event.cancelled) {
    newStyle.outline = "2px solid #3d2d01";
    newStyle.opacity = "0.9";
  }

  if (event.postponed) {
    newStyle.outline = "2px solid black";
    newStyle.opacity = "0.9";
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
        <Avatar className={classes.cancelled} alt="Cancelled Races">
          C
        </Avatar>
        <Avatar className={classes.postponed} alt="Postponed Races">
          P
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
