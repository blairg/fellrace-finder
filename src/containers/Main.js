import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';

import MenuBar from './../components/MenuBar';
import Runner from './Runner';
import Race from './Race';

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
				this.props.dispatchMenuAction({race: true, runner: false});
			} else {
				this.props.dispatchMenuAction({race: false, runner: true});
			}

			this.props.dispatchMenuToggleAction(false);
		}
	}

	raceOnClick = async event => {
    event.preventDefault();
		setLocal({key: cacheKey, value: 'race'});

		this.props.dispatchMenuAction({race: true, runner: false});
		this.props.dispatchMenuToggleAction(false);
  };

	runnerOnClick = async event => {
    event.preventDefault();
		setLocal({key: cacheKey, value: 'runner'});

		this.props.dispatchMenuAction({race: false, runner: true});
		this.props.dispatchMenuToggleAction(false);
  };

  render() {
		const { race, runner } = this.props.menuReducer;
		let runnerOrRaceSearch;
		let hasUserSelectedMenuOption = false;

		if (!race) {
			runnerOrRaceSearch = <Runner />;
		} else {
			runnerOrRaceSearch = <Race />;
		}

		if (race || runner) {
			hasUserSelectedMenuOption = true;
		}

    return (
      <React.Fragment>
				<MenuBar raceOnClick={this.raceOnClick} runnerOnClick={this.runnerOnClick} 
								 closeMenu={hasUserSelectedMenuOption} />
				{runnerOrRaceSearch}
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