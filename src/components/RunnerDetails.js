import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ArrowDownward } from '@material-ui/icons';

const cardStyles = {
  marginRight: '10px',
  marginLeft: '5px',
  marginTop: '5px',
  marginBottom: '5px',
  height: '190px',
};

const styles = {
  root: {
    flexGrow: 1,
    marginRight: '10px',
    marginLeft: '5px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  cardBody: {
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  overallCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  categoryCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  clubCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  timeCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  cardTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
};

function RunnerDetails(props) {
  const { classes, runner } = props;
  const timeDownwardArrow =
    runner.timeFromFirst !== '' ? <ArrowDownward /> : null;

  return (
    <div key={runner.time} className={classes.root}>
      <Grid className={classes.root} container>
        <Grid item xs>
          <Card className={classes.overallCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Overall
              </Typography>
              <div className={classes.cardBody}>
                <Typography variant="subheading">{runner.position}</Typography>
                <Typography variant="subheading">
                  {runner.racePercentagePosition}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.categoryCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Category - {runner.category}
              </Typography>
              <div className={classes.cardBody}>
                <Typography variant="subheading">
                  {runner.categoryPercentage} - {runner.categoryPosition}
                </Typography>
                <Typography variant="subheading">
                  {runner.categoryWinner.name} - {runner.categoryWinner.time}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid className={classes.root} container>
        <Grid item xs>
          <Card className={classes.clubCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Club - {runner.club}
              </Typography>
              <div className={classes.cardBody}>
                <Typography variant="subheading">
                  {runner.clubPosition} - {runner.clubPercentage}
                </Typography>
                <Typography variant="subheading">
                  {runner.clubWinner.name} - {runner.clubWinner.time}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.timeCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Time
              </Typography>
              <div className={classes.cardBody}>
                <Typography variant="subheading">{runner.time}</Typography>
                <Typography variant="subheading">
                  {runner.winner.name} - {runner.winner.time}
                </Typography>
                <Typography variant="subheading">
                  {timeDownwardArrow} {runner.timeFromFirst}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(RunnerDetails);
