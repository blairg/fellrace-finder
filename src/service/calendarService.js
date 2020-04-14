import axios from "axios";

export async function getEvents() {
  let events = null;

  await axios
    .get(`${process.env.REACT_APP_API_SERVER}/calendarEvents`)
    .then(function(response) {
      const isValidDate = dateValue => {
        const timestamp = Date.parse(dateValue);

        return isNaN(timestamp);
      };
      events = [];

      for (let i = 0; i < response.data.length; i++) {
        if (
          isValidDate(response.data[i].start) ||
          isValidDate(response.data[i].end)
        ) {
          continue;
        }

        const startDate = new Date(Date.parse(response.data[i].start));
        const endDate = new Date(Date.parse(response.data[i].end));

        events.push({
          id: response.data[i].id,
          title: response.data[i].title,
          start: startDate,
          end: endDate,
          short: response.data[i].short,
          medium: response.data[i].medium,
          long: response.data[i].long,
          cancelled: response.data[i].cancelled,
          postponed: response.data[i].postponed,
          url: response.data[i].url
        });
      }

      return events;
    })
    .catch(function(error) {
      console.log(error);
    });

  return events;
}
