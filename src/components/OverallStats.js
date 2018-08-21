import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import PerformanceStats from './PerformanceStats';

const HeaderTableCell = withStyles(theme => ({
  root: {
    backgroundColor: '#7A27A0',
    color: theme.palette.common.white,
  },
}))(TableCell);

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
  }
});

const staticListOfMonths = () => {
  let listOfMonths = [];

  listOfMonths.push('January');
  listOfMonths.push('February');
  listOfMonths.push('March');
  listOfMonths.push('April');
  listOfMonths.push('May');
  listOfMonths.push('June');
  listOfMonths.push('July');
  listOfMonths.push('August');
  listOfMonths.push('September');
  listOfMonths.push('October');
  listOfMonths.push('November');
  listOfMonths.push('December');

  return listOfMonths;
};

const staticListOfTableCells = () => {
  let listOfMonths = [];

  for (let i = 0; i < 12; i++) {
    listOfMonths.push(<TableCell key={i} numeric>0</TableCell>)
  }

  return listOfMonths;
};

const buildMonthRows = (racesByYear) => {
  let listOfYears = [];
  let index = 0;

  racesByYear.map((eachYear) => {
    const listOfMonths = staticListOfMonths();
    const listOfTableCells = staticListOfTableCells();
    const yearKey = 'year-' + eachYear.year.toString() + '-' + index.toString();
    const yearCell = <TableCell key={yearKey} numeric>{eachYear.year}</TableCell>;

    if (eachYear.months && eachYear.months.length > 0) {
      for (let i = 0; i < eachYear.months.length; i++) {
        const eachMonth = eachYear.months[i];
        const monthName = Object.keys(eachMonth)[0];
        const monthIndex = listOfMonths.indexOf(monthName);

        if (monthIndex > -1) {
          const yearMonthKey = 'year-' + eachYear.year.toString() + '-month' + monthName;
          const monthValue = `${eachMonth[monthName]}`;

          listOfTableCells[monthIndex] = <TableCell key={yearMonthKey} numeric>{monthValue}</TableCell>;
        }
      }
    }

    const rowKey = eachYear.year.toString() + '-' + index.toString();
    listOfTableCells.unshift(yearCell);
    listOfYears.push(<TableRow key={rowKey}>{listOfTableCells}</TableRow>);
  });

  return listOfYears;
};

function OverallStats(props) {
  const { overallStats, classes } = props;

  console.log(overallStats);

  const yearsAndMonths = buildMonthRows(overallStats.racesByYear);

  return (
    <React.Fragment>
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Show number of races by year and month</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item xs>
              <PerformanceStats overallStats={overallStats} />
            </Grid>
            <Grid item xs>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow key={'header'}>
                      <HeaderTableCell key={'year'}></HeaderTableCell>
                      <HeaderTableCell key={'jan'} numeric>Jan</HeaderTableCell>
                      <HeaderTableCell key={'feb'} numeric>Feb</HeaderTableCell>
                      <HeaderTableCell key={'mar'} numeric>Mar</HeaderTableCell>
                      <HeaderTableCell key={'apr'} numeric>Apr</HeaderTableCell>
                      <HeaderTableCell key={'may'} numeric>May</HeaderTableCell>
                      <HeaderTableCell key={'jun'} numeric>Jun</HeaderTableCell>
                      <HeaderTableCell key={'jul'} numeric>Jul</HeaderTableCell>
                      <HeaderTableCell key={'aug'} numeric>Aug</HeaderTableCell>
                      <HeaderTableCell key={'sep'} numeric>Sep</HeaderTableCell>
                      <HeaderTableCell key={'oct'} numeric>Oct</HeaderTableCell>
                      <HeaderTableCell key={'nov'} numeric>Nov</HeaderTableCell>
                      <HeaderTableCell key={'dec'} numeric>Dec</HeaderTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {yearsAndMonths}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
}

export default withStyles(styles)(OverallStats);
