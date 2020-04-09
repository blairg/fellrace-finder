import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import FacebookLogin from "react-facebook-login";

import CircularProgress from "@material-ui/core/CircularProgress";

import { setLocal } from "./../service/storageService";
import { loginAction } from "./../actions/user";
import { menuAction } from "./../actions/menu";

const styles = theme => ({});

class User extends Component {
  facebookLoginResponse = details => {
    const userDetails = { provider: "facebook", details: details };

    setLocal({ key: "userLogin", value: userDetails });
    this.props.dispatchLoginAction(userDetails);
    this.props.dispatchMenuAction({
      race: false,
      runner: false,
      calendar: true,
      allRaces: false,
      login: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<CircularProgress />}>
          <FacebookLogin
            appId="671147657003053"
            fields="name,picture"
            callback={this.facebookLoginResponse}
          />
          <br />
          <br />
          <br />
        </Suspense>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  dispatchMenuAction: menu => dispatch(menuAction(menu)),
  dispatchLoginAction: userDetails => dispatch(loginAction(userDetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(React.memo(User)));
