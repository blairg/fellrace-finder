import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EventNoteIcon from '@material-ui/icons/EventNote';

import { menuToggleAction } from './../actions/menu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDrawerOpen = () => {
    this.props.dispatchMenuToggleAction(true);
  };

  handleDrawerClose = () => {
    this.props.dispatchMenuToggleAction(false);
  };

  render() {
    const { classes, theme, runnerOnClick, raceOnClick, menuReducer } = this.props;
    const { menuOpen } = menuReducer;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: menuOpen,
          })}
        >
          <Toolbar disableGutters={menuOpen}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, menuOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={menuOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button key='Runner' onClick={runnerOnClick}>
                <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                <ListItemText primary='Runner' />
            </ListItem>
            <ListItem button key='Race' onClick={raceOnClick}>
                <ListItemIcon><EventNoteIcon /></ListItemIcon>
                <ListItemText primary='Race' />
            </ListItem>
            {/* <ListItem button key='Club'>
                <ListItemIcon><MapIcon /></ListItemIcon>
                <ListItemText primary='Club' />
            </ListItem>
            <ListItem button key='Calendar'>
                <ListItemIcon><MapIcon /></ListItemIcon>
                <ListItemText primary='Calendar' />
            </ListItem> */}
          </List>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
	 dispatchMenuToggleAction: (menuOpen) => dispatch(menuToggleAction(menuOpen)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(React.memo(MenuBar)));
