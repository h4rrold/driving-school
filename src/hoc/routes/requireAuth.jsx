import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getUserDataSelector } from "redux/selectors/auth";

function requireAuth(Component) {
  class ProtectedRoute extends React.PureComponent {
    render() {
      const { isAuthenticated } = this.props;
      return isAuthenticated ? (
        <Component {...this.props} />
      ) : (
        <Redirect to="/login">Nope</Redirect>
      );
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: getUserDataSelector(state),
  });

  return compose(connect(mapStateToProps, null))(ProtectedRoute);
}

export { requireAuth };
