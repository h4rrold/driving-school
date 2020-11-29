import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import { requireAuth } from "hoc";
import appRoutes from "config/routes";
import { NotFoundPage } from "pages";
import { renderAsideNavigation } from "store/actionsCreators/navigation";

const AppRoute = ({ isProtected, component, renderAside, ...rest }) => {
  if (rest.routeProps && rest.routeProps.hasAside === true) {
    renderAside(true);
  } else {
    renderAside(false);
  }

  return (
    <Route
      component={isProtected ? requireAuth(component) : component}
      {...rest}
    />
  );
};

const Routes = ({ renderAside }) => {
  return (
    <Switch>
      {!!appRoutes.length &&
        appRoutes.map((routeProps) => (
          <AppRoute
            isProtected={routeProps.isProtected}
            key={routeProps.name}
            component={routeProps.component}
            renderAside={renderAside}
            {...routeProps}
          />
        ))}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) => ({
  renderAside: (params) => dispatch(renderAsideNavigation(params)),
});

export default connect(null, mapDispatchToProps)(Routes);
