import React, { PureComponent, Suspense } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import MenuBar from "./../components/MenuBar";
import Runner from "./Runner";
import Race from "./Race";
import RaceList from "./RaceList";

import { menuAction, menuToggleAction } from "./../actions/menu";
import { eventsAction } from "./../actions/calendar";
import { getLocal, setLocal } from "./../service/storageService";
import { getEvents } from "./../service/calendarService";

const RaceCalendar = React.lazy(() => import("./../components/RaceCalendar"));

const cacheKey = "Main-menuoption";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const cachedValue = getLocal(cacheKey);

    if (cachedValue) {
      if (cachedValue === "race") {
        this.props.dispatchMenuAction({
          race: true,
          runner: false,
          calendar: false,
          allRaces: false
        });
      }

      if (cachedValue === "runner") {
        this.props.dispatchMenuAction({
          race: false,
          runner: true,
          calendar: false,
          allRaces: false
        });
      }

      if (cachedValue === "calendar") {
        this.props.dispatchMenuAction({
          race: false,
          runner: false,
          calendar: true,
          allRaces: false
        });
      }

      if (cachedValue === "allraces") {
        this.props.dispatchMenuAction({
          race: false,
          runner: false,
          calendar: false,
          allRaces: true
        });
      }

      this.props.dispatchMenuToggleAction(false);
    }
  }

  async componentDidMount() {
    this.props.dispatchCalendarEventsAction(await getEvents());
  }

  raceOnClick = async event => {
    event.preventDefault();
    setLocal({ key: cacheKey, value: "race" });

    this.props.dispatchMenuAction({
      race: true,
      runner: false,
      calendar: false,
      allRaces: false
    });
    this.props.dispatchMenuToggleAction(false);
  };

  allRacesOnClick = async event => {
    event.preventDefault();
    setLocal({ key: cacheKey, value: "allraces" });

    this.props.dispatchMenuAction({
      race: false,
      runner: false,
      calendar: false,
      allRaces: true
    });
    this.props.dispatchMenuToggleAction(false);
  };

  runnerOnClick = async event => {
    event.preventDefault();
    setLocal({ key: cacheKey, value: "runner" });

    this.props.dispatchMenuAction({
      race: false,
      runner: true,
      calendar: false
    });
    this.props.dispatchMenuToggleAction(false);
  };

  calendarOnClick = async event => {
    event.preventDefault();
    setLocal({ key: cacheKey, value: "calendar" });

    this.props.dispatchMenuAction({
      race: false,
      runner: false,
      calendar: true
    });
    this.props.dispatchMenuToggleAction(false);
  };

  render() {
    const { race, runner, calendar, allRaces } = this.props.menuReducer;
    const { events } = this.props.calendarReducer;
    let menuOption;
    let hasUserSelectedMenuOption = false;

    if (!race && !calendar && runner && !allRaces) {
      menuOption = <Runner />;
    }

    if (race && !calendar && !runner && !allRaces) {
      menuOption = <Race />;
    }

    if (!race && !calendar && !runner && allRaces) {
      menuOption = (
        <Suspense fallback={<CircularProgress />}>
          <RaceList />
        </Suspense>
      );
    }

    if (events && !race && calendar && !runner && !allRaces) {
      menuOption = (
        <Suspense fallback={<CircularProgress />}>
          <RaceCalendar events={events} />
        </Suspense>
      );
    }

    if (race || runner || calendar || allRaces) {
      hasUserSelectedMenuOption = true;
    }

    return (
      <React.Fragment>
        <MenuBar
          raceOnClick={this.raceOnClick}
          runnerOnClick={this.runnerOnClick}
          allRacesOnClick={this.allRacesOnClick}
          calendarOnClick={this.calendarOnClick}
          closeMenu={hasUserSelectedMenuOption}
        />
        {menuOption}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  dispatchMenuAction: menu => dispatch(menuAction(menu)),
  dispatchMenuToggleAction: menuOpen => dispatch(menuToggleAction(menuOpen)),
  dispatchCalendarEventsAction: events => dispatch(eventsAction(events))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
