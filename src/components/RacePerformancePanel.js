import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

ReactChartkick.addAdapter(Chart);

const styles = theme => ({
  root: {
    width: '98%',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  expansionPanel: {
    marginTop: '5px',
    marginBottom: '15px',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function RacePerformancePanel(props) {
  const { raceData, classes } = props;

  return (
    <React.Fragment>
      <ExpansionPanel className={classes.expansionPanel} expanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            <b>Year Performance Graph</b>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item xs={12}>
              <LineChart
                download={true}
                colors={['#9B2FAE', '#666']}
                data={raceData}
                xtitle="Year"
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
}

export default withStyles(styles)(React.memo(RacePerformancePanel));
