import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

const styles = theme => ({

});

function PerformanceChart(props) {
    const { performanceGraphData } = props;
  
    return (
      <React.Fragment>
        <LineChart download={true} suffix="%" title='Race Performance'
                   colors={["#42b22c", "#666"]} data={performanceGraphData} 
                   xtitle="Year/Month" ytitle="Performance" 
        />
      </React.Fragment>
  );
}

export default withStyles(styles)(PerformanceChart);