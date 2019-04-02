import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import { Async } from 'react-select';
import _ from 'lodash';
import 'react-select/dist/react-select.css';

import { partialRaceSearch } from './../service/searchService';

class Race extends PureComponent {
  constructor(props) {
    super(props);

		this.searchRaceRef = React.createRef();
  }

  fetchRaces = async (searchValue, callback) => {
    console.log('searching - ', searchValue);

    if (!searchValue) {
      callback(null, { options: [] });
    }

    if (searchValue.length > 2) {
      callback(null, await partialRaceSearch(searchValue));
    } else {
      callback(null, { options: [] });
    }
  };

	debouncedFetchRaces = _.debounce(this.fetchRaces, 100);

  getRaces = (searchValue, callback) => {
    if (!searchValue || searchValue.length < 3) {
      return callback(null, { options: [] });
    }

    this.debouncedFetchRaces(searchValue, callback);

		// return callback(null, { options: [] });
  };

	// TODO the events for the menu 

  render() {
    return (
      <React.Fragment>
        <div>
          <Async
            cacheOptions
            defaultOptions
            // className={searchField}
            valueKey="original"
            labelKey="display"
            matchProp="any"
            name="race-search-field"
            onChange={this.onChange}
            loadOptions={this.getRaces}
            placeholder="Search Race"
            noResultsText="No race found"
            // value={chosenRace}
            multi={true}
            ignoreAccents={false}
          />
           {/* {racesSelect}
           {clearButton} */}
        </div>
        {/*  {downwardArrowButtonShow}
         {loadingResults}
         {overallStats}
         {raceResults}
         {loadMoreLoadingProgress}
         {loadMoreButton}
         {scrollToTopButton} */}
      </React.Fragment>
  	);
 	}
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
 });

export default connect(mapStateToProps, mapDispatchToProps)(Race);