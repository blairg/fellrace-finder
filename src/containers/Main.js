import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';

import MenuBar from './../components/MenuBar';
import Runner from './Runner';
import Race from './Race';

import { menuAction, menuToggleAction } from './../actions/menu';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

	raceOnClick = async event => {
    event.preventDefault();
		console.log('race clicked');

		this.props.dispatchMenuAction({race: true, runner: false});
		this.props.dispatchMenuToggleAction(false);
  };

	runnerOnClick = async event => {
    event.preventDefault();
		console.log('runner clicked');

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