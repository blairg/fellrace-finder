import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const margins = {
    marginRight: '10px',
    marginLeft: '5px',
    marginTop: '5px',
    marginBottom: '5px',
  };
  
  const boxShadow = '0px 0px 9px #50AE55';
  
  const styles = {
    root: {
      flexGrow: 1,
      ...margins,
    },
    overallCard: {
      ...margins,
      '&:hover': {
        boxShadow,
      },
    },
  };

function SameDayRaces(props) {
  const { classes, races } = props;
  let sameDayRaces = [];

  for (let i = 0; i < races.length; i++) {
    const raceUrl = `https://www.fellrunner.org.uk/races.php?id=${races[i].id}`;

    sameDayRaces.push(<TableRow key={races[i].id}>
        <TableCell align="left"><a href={raceUrl} target="_blank">{races[i].name}</a></TableCell>
        <TableCell align="left">{races[i].time}</TableCell>
        <TableCell align="left">{races[i].raceType}</TableCell>
    </TableRow>);
  }

  return (
    <Grid className={classes.root} container>
        <Grid item xs>
            <Typography variant="subheading">
                <b>Races on same day</b>
            </Typography>
            <Card key={'samedayraces'} className={classes.overallCard}>
                <CardContent>
                    <Paper className={classes.tableRoot}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow key={'samedayracesheadings'}>
                                    <TableCell align="left"><b>Race</b></TableCell>
                                    <TableCell align="left"><b>Time</b></TableCell>
                                    <TableCell align="left"><b>Category</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sameDayRaces}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
}

export default withStyles(styles)(React.memo(SameDayRaces));
