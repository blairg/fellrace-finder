import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactChartkick, { AreaChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

const styles = theme => ({});

function OverallPerformanceChart(props) {
  const { overallRaceData } = props;

  return (
    <React.Fragment>
      <AreaChart
        download={true}
        suffix="%"
        title="Overall Performance"
        colors={['#9B2FAE', '#666']}
        data={overallRaceData}
        xtitle="Race Date"
        ytitle="Performance"
      />
    </React.Fragment>
  );
}

export default withStyles(styles)(OverallPerformanceChart);
