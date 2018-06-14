import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1,
        marginRight: '10px',
        marginLeft: '10px',
        marginTop: '5px',
        marginBottom: '5px',
    },
    card: {
      marginRight: '10px',
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '5px',
      height: '180px',
    },
    cardTitle: {
      textAlign: 'left',
    },
};

function RunnerDetails(props) {
    const { classes, runner } = props;

    return (
        <div key={runner.time} className={classes.root}>
            <Grid className={classes.root} container>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardTitle}>
                                Race
                            </Typography>
                            <Typography variant="headline">
                                {runner.position}
                            </Typography>
                            <Typography variant="subheading">
                                {runner.racePercentagePosition}
                            </Typography>
                            <Typography variant="headline">
                                {runner.time}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardTitle}>
                                Category
                            </Typography>
                            <Typography variant="headline">
                                {runner.category}
                            </Typography>
                            <Typography variant="subheading">
                                {runner.categoryPercentage}
                            </Typography>
                            <Typography variant="subheading">
                                {runner.categoryPosition}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid className={classes.root} container>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardTitle}>
                                Club
                            </Typography>
                            <Typography variant="headline">
                                {runner.club}
                            </Typography>
                            <Typography variant="subheading">
                                {runner.clubPercentage}
                            </Typography>
                            <Typography variant="subheading">
                                {runner.clubPosition}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="body2" className={classes.cardTitle}>
                                Time
                            </Typography>
                            <Typography variant="headline">
                                {runner.timeFromFirst}
                            </Typography>
                            <Typography variant="headline">
                                {runner.timeFromLast}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(RunnerDetails);