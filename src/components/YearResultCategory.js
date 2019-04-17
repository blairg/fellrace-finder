import React, { Suspense } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ResultCategory = React.lazy(() => import('./ResultCategory'));

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

const buildRacePanels = (races, classes) => {
    const panels = [];

    for (let i = 0; i < races.length; i++) {
        if (races[i].numberOfRunners > 0) {
            const category = races[i].categories;
            const categories = <Suspense fallback={<CircularProgress className={classes.progress} />}>
                <ResultCategory key={races[i]._id} categoryRecords={category} />
            </Suspense>;

            panels.push(
                <ExpansionPanel key={races[i].year} className={classes.expansionPanel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        {races[i].year}
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {categories}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        }
    }

    return panels;
};

function YearResultCategory(props) {
    const { races, classes } = props;
    const panels = buildRacePanels(races, classes);

    return (
        <React.Fragment>
            {panels}
        </React.Fragment>
    );
}
    
export default withStyles(styles)(React.memo(YearResultCategory));