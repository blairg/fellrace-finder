import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";

import "react-big-calendar/lib/css/react-big-calendar.css";

import dates from "../utils/dates";

const localizer = BigCalendar.momentLocalizer(moment);

const styles = theme => ({
  bigRaceCalendar: {
    minHeight: "400px"
  }
});

const now = new Date();

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2018, 3, 0),
    end: new Date(2018, 3, 1)
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2018, 3, 7),
    end: new Date(2018, 3, 10)
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0)
  }
];

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

function RaceCalendar(props) {
  const { classes, events } = props;

  if (!events) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <BigCalendar
        className={classes.bigRaceCalendar}
        events={events}
        views={allViews}
        // step={60}
        showMultiDayTimes
        defaultView={BigCalendar.Views.MONTH}
        // max={dates.add(dates.endOf(now, 'day'), -1, 'hours')}
        // max={dates.add(dates.endOf(new Date(2016, 1, 6), 'day'), -1, 'hours')}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        scrollToTime={new Date(1970, 1, 1, 6)}
        localizer={localizer}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle = {
            backgroundColor: "lightgrey",
            color: "black",
            borderRadius: "0px",
            border: "none"
          };

          if (event.short) {
            newStyle.backgroundColor = "lightgreen";
          }

          if (event.medium) {
            newStyle.backgroundColor = "orange";
            newStyle.color = "white";
          }

          if (event.long) {
            newStyle.backgroundColor = "red";
            newStyle.color = "white";
          }

          return {
            className: "",
            style: newStyle
          };
        }}
      />
      <br />
      <br />
      <br />
    </div>
  );
}

export default withStyles(styles)(React.memo(RaceCalendar));
