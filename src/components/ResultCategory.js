import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

const buildRecords = (categories, classes) => {
    let categoryCollection = [];
    let recordCollection = [];

    for (let i = 0; i < categories.length; i++) {
        const eachCategory = categories[i];
        recordCollection = [];

        for (let j = 0; j < eachCategory._records.length; j++) {
            const eachRecord = eachCategory._records[j];
            const key = `${eachRecord._runnerName}${eachRecord._time}${eachRecord._year}`;

            recordCollection.push(
                <Typography key={key} variant="subheading">
                    <b>{j + 1}.</b> {eachRecord._runnerName} ({eachRecord._club}) - {eachRecord._time} ({eachRecord._year})
                </Typography>
            );
        }

        categoryCollection.push(
            <Card key={eachCategory._name} className={classes.overallCard}>
                <CardContent>
                    <Typography variant="subheading">
                        <b>Category:</b> {eachCategory._name}
                    </Typography>
                    {recordCollection}
                </CardContent>
            </Card>
        );
    }

    return categoryCollection;
}

function ResultCategory(props) {
    const { classes, categoryRecords } = props;
  
    return (
      <div key={categoryRecords._name} className={classes.root}>
        <Grid className={classes.root} container>
          <Grid item xs>
            {buildRecords(categoryRecords, classes)}
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default withStyles(styles)(React.memo(ResultCategory));