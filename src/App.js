import React from "react";
import { connect } from "react-redux";
import { hasAsideNavigationSelector } from "redux/selectors/navigation";
import { AppSidebar } from "components/sidebars";
import Routes from "./Routes";

function App({ hasAsideNavigation }) {
  return (
    <>
      {hasAsideNavigation && <AppSidebar />}
      <Routes />
    </>
  );
}

const mapStateToProps = (state) => ({
  hasAsideNavigation: hasAsideNavigationSelector(state),
});
export default connect(mapStateToProps, null)(App);
