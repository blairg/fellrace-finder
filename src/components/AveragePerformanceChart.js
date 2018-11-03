import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

const styles = theme => ({});

function AveragePerformanceChart(props) {
  const { performanceData, title, xTitle } = props;

  return (
    <React.Fragment>
      <LineChart
        download={true}
        suffix="%"
        title={title}
        colors={['#42b22c', '#666']}
        data={performanceData}
        xtitle={xTitle}
        ytitle="Performance"
      />
    </React.Fragment>
  );
}

export default withStyles(styles)(React.memo(AveragePerformanceChart));
