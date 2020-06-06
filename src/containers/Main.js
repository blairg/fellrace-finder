import React, { PureComponent, Suspense } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import MenuBar from "./../components/MenuBar";
import Runner from "./Runner";
import Race from "./Race";
import RaceList from "./RaceList";
import User from "./User";
import Maps from "./Maps";

import { menuAction, menuToggleAction } from "./../actions/menu";
import { eventsAction } from "./../actions/calendar";
import { loginAction } from "./../actions/user";
import { getLocal, setLocal, removeLocal } from "./../service/storageService";
import { getAllRacesWithGeoLocation } from "./../service/searchService";
import { getEvents } from "./../service/calendarService";
import {
  MENU_CHOICE,
  PREVIOUS_MENU_CHOICE,
  USER_LOGIN
} from "./../utils/cacheKeys";

const RaceCalendar = React.lazy(() => import("./../components/RaceCalendar"));
const menuCacheValues = {
  race: "race",
  runner: "runner",
  calendar: "calendar",
  allraces: "allraces",
  login: "login",
  maps: "maps"
};

class Main extends PureComponent {
  componentWillMount() {
    const menuCachedValue = getLocal(MENU_CHOICE);
    const loggedInCacheValue = getLocal(USER_LOGIN);

    if (menuCachedValue) {
      if (menuCachedValue === menuCacheValues.race) {
        this.props.dispatchMenuAction({
          race: true,
          runner: false,
          calendar: false,
          allRaces: false,
          login: false,
          maps: false
        });
      }

      if (menuCachedValue === menuCacheValues.runner) {
        this.props.dispatchMenuAction({
          race: false,
          runner: true,
          calendar: false,
          allRaces: false,
          login: false,
          maps: false
        });
      }

      if (menuCachedValue === menuCacheValues.calendar) {
        this.props.dispatchMenuAction({
          race: false,
          runner: false,
          calendar: true,
          allRaces: false,
          login: false,
          maps: false
        });
      }

      if (menuCachedValue === menuCacheValues.allraces) {
        this.props.dispatchMenuAction({
          race: false,
          runner: false,
          calendar: false,
          allRaces: true,
          login: false,
          maps: false
        });
      }

      if (menuCachedValue === menuCacheValues.login) {
        this.props.dispatchMenuAction({
          race: false,
          runner: false,
          calendar: false,
          allRaces: false,
          login: true,
          maps: false
        });
      }

      if (menuCachedValue === menuCacheValues.maps) {
        this.props.dispatchMenuAction({
          race: false,
          runner: false,
          calendar: false,
          allRaces: false,
          login: false,
          maps: true
        });
      }

      this.props.dispatchMenuToggleAction(false);
    }

    if (loggedInCacheValue) {
      const expiryTime = loggedInCacheValue.details.data_access_expiration_time;
      const currentTime = parseInt(
        new Date()
          .getTime()
          .toString()
          .substr(0, 10)
      );

      if (currentTime >= expiryTime) {
        removeLocal(USER_LOGIN);
        this.props.dispatchLoginAction(null);
      } else {
        this.props.dispatchLoginAction(loggedInCacheValue);
      }

      setLocal({ key: MENU_CHOICE, value: menuCacheValues.login });
    }

    this.calendarMenuOption();
  }

  async componentDidMount() {
    if (this.props.menuReducer.calendar) {
      this.props.dispatchCalendarEventsAction(await getEvents());
    }

    if (this.props.menuReducer.maps) {
      this.props.dispatchMapsRacesAction(await getAllRacesWithGeoLocation());
    }
  }

  calendarMenuOption = () => {
    setLocal({ key: MENU_CHOICE, value: menuCacheValues.calendar });
    setLocal({ key: PREVIOUS_MENU_CHOICE, value: menuCacheValues.calendar });

    this.props.dispatchMenuAction({
      race: false,
      runner: false,
      calendar: true,
      allRaces: false,
      login: false,
      maps: false
    });
    this.props.dispatchMenuToggleAction(false);
  };

  raceOnClick = async event => {
    event.preventDefault();
    setLocal({ key: MENU_CHOICE, value: menuCacheValues.race });
    setLocal({ key: PREVIOUS_MENU_CHOICE, value: menuCacheValues.race });

    this.props.dispatchMenuAction({
      race: true,
      runner: false,
      calendar: false,
      allRaces: false,
      login: false,
      maps: false
    });
    this.props.dispatchMenuToggleAction(false);
  };

  runnerOnClick = async event => {
    event.preventDefault();
    setLocal({ key: MENU_CHOICE, value: menuCacheValues.runner });
    setLocal({ key: PREVIOUS_MENU_CHOICE, value: menuCacheValues.runner });

    this.props.dispatchMenuAction({
      race: false,
      runner: true,
      calendar: false,
      allRaces: false,
      login: false,
      maps: false
    });
    this.props.dispatchMenuToggleAction(false);
  };

  allRacesOnClick = async event => {
    event.preventDefault();
    setLocal({ key: MENU_CHOICE, value: menuCacheValues.allraces });
    setLocal({ key: PREVIOUS_MENU_CHOICE, value: menuCacheValues.allraces });

    this.props.dispatchMenuAction({
      race: false,
      runner: false,
      calendar: false,
      allRaces: true,
      login: false,
      maps: false
    });
    this.props.dispatchMenuToggleAction(false);
  };

  calendarOnClick = async event => {
    event.preventDefault();
    this.calendarMenuOption();
  };

  loginOnClick = async event => {
    event.preventDefault();
    setLocal({ key: MENU_CHOICE, value: menuCacheValues.login });

    this.props.dispatchMenuAction({
      race: false,
      runner: false,
      calendar: false,
      allRaces: false,
      login: true,
      maps: false
    });
    this.props.dispatchMenuToggleAction(false);
  };

  mapsOnClick = async event => {
    event.preventDefault();
    setLocal({ key: MENU_CHOICE, value: menuCacheValues.maps });

    this.props.dispatchMenuAction({
      race: false,
      runner: false,
      calendar: false,
      allRaces: false,
      login: false,
      maps: true
    });
    this.props.dispatchMenuToggleAction(false);
  };

  render() {
    const {
      race,
      runner,
      calendar,
      allRaces,
      login,
      maps
    } = this.props.menuReducer;
    const { events } = this.props.calendarReducer;
    const { userDetails } = this.props.userReducer;
    const userLoggedIn = !userDetails ? true : false;
    let menuOption;
    let hasUserSelectedMenuOption = false;

    if (!race && !calendar && runner && !allRaces && !login && !maps) {
      menuOption = <Runner />;
    }

    if (race && !calendar && !runner && !allRaces && !login && !maps) {
      menuOption = <Race />;
    }

    if (!race && !calendar && !runner && allRaces && !login && !maps) {
      menuOption = (
        <Suspense fallback={<CircularProgress />}>
          <RaceList />
        </Suspense>
      );
    }

    if (
      events &&
      !race &&
      calendar &&
      !runner &&
      !allRaces &&
      !login &&
      !maps
    ) {
      menuOption = (
        <Suspense fallback={<CircularProgress />}>
          <RaceCalendar events={events} />
        </Suspense>
      );
    }

    if (!race && !calendar && !runner && !allRaces && login && !maps) {
      menuOption = (
        <Suspense fallback={<CircularProgress />}>
          <User />
        </Suspense>
      );
    }

    if (!race && !calendar && !runner && !allRaces && !login && maps) {
      menuOption = (
        <Suspense fallback={<CircularProgress />}>
          <Maps />
        </Suspense>
      );
    }

    if (race || runner || calendar || allRaces || login || maps) {
      hasUserSelectedMenuOption = true;
    }

    return (
      <React.Fragment>
        <MenuBar
          raceOnClick={this.raceOnClick}
          runnerOnClick={this.runnerOnClick}
          allRacesOnClick={this.allRacesOnClick}
          calendarOnClick={this.calendarOnClick}
          loginOnClick={this.loginOnClick}
          mapsOnClick={this.mapsOnClick}
          closeMenu={hasUserSelectedMenuOption}
          loggedIn={userLoggedIn}
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
  dispatchCalendarEventsAction: events => dispatch(eventsAction(events)),
  dispatchLoginAction: userDetails => dispatch(loginAction(userDetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
