import axios from "axios";

import { getSession, setSession } from "./storageService";

export async function getEvents() {
  console.log("calling getEvents");
  const cacheKey = "calendarService.calendarEvents";
  const sessionEvents = getSession(cacheKey);

  if (sessionEvents) {
    return JSON.parse(sessionEvents);
  }

  let events = null;

  await axios
    .get(`${process.env.REACT_APP_API_SERVER}/calendarEvents`)
    .then(function(response) {
      events = [];

      for (let i = 0; i < response.data.length; i++) {
        events.push({
          id: response.data[i].id,
          title: response.data[i].title,
          start: new Date(response.data[i].start),
          end: new Date(response.data[i].end),
          short: response.data[i].short,
          medium: response.data[i].medium,
          long: response.data[i].long
        });
      }

      return events;
    })
    .catch(function(error) {
      console.log(error);
    });

  //setSession({key: cacheKey, value: JSON.stringify(events)});

  return events;
}
