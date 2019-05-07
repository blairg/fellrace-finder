import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';

import MenuBar from './../components/MenuBar';
import Runner from './Runner';
import Race from './Race';
import RaceCalendar from './../components/RaceCalendar';

import { menuAction, menuToggleAction } from './../actions/menu';
import { getLocal, setLocal,  } from './../service/storageService';

const cacheKey = 'Main-menuoption';

class Main extends PureComponent {
  constructor(props) {
    super(props);
	}
	
	componentWillMount() {
		const cachedValue = getLocal(cacheKey);

		if (cachedValue) {
			if (cachedValue === 'race') {
				this.props.dispatchMenuAction({race: true, runner: false, calendar: false});
			}

			if (cachedValue === 'runner') {
				this.props.dispatchMenuAction({race: false, runner: true, calendar: false});
			}

			if (cachedValue === 'calendar') {
				this.props.dispatchMenuAction({race: false, runner: false, calendar: true});
			}

			this.props.dispatchMenuToggleAction(false);
		}
	}

	raceOnClick = async event => {
    event.preventDefault();
		setLocal({key: cacheKey, value: 'race'});

		this.props.dispatchMenuAction({race: true, runner: false, calendar: false});
		this.props.dispatchMenuToggleAction(false);
  };

	runnerOnClick = async event => {
    event.preventDefault();
		setLocal({key: cacheKey, value: 'runner'});

		this.props.dispatchMenuAction({race: false, runner: true, calendar: false});
		this.props.dispatchMenuToggleAction(false);
	};
	
	calendarOnClick = async event => {
    event.preventDefault();
		setLocal({key: cacheKey, value: 'calendar'});

		this.props.dispatchMenuAction({race: false, runner: false, calendar: true});
		this.props.dispatchMenuToggleAction(false);
  };

  render() {
		const { race, runner, calendar } = this.props.menuReducer;
		let menuOption;
		let hasUserSelectedMenuOption = false;

		if (!race && !calendar && runner) {
			menuOption = <Runner />;
		} 
		
		if (race && !calendar && !runner) {
			menuOption = <Race />;
		}

		if (!race && calendar && !runner) {
			menuOption = <RaceCalendar />;
		}

		if (race || runner || calendar) {
			hasUserSelectedMenuOption = true;
		}

    return (
      <React.Fragment>
				<MenuBar raceOnClick={this.raceOnClick} runnerOnClick={this.runnerOnClick} 
				         calendarOnClick={this.calendarOnClick} closeMenu={hasUserSelectedMenuOption} />
				{menuOption}
      </React.Fragment>
  	);
 	}
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
	 dispatchMenuAction: (menu) => dispatch(menuAction(menu)),
	 dispatchMenuToggleAction: (menuOpen) => dispatch(menuToggleAction(menuOpen)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(Main);