import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import {
  isExpandedSelector,
  isLockedSelector,
} from "store/selectors/navigation";

function Main({ render, isExpanded, isLocked }) {
  return (
    <div
      className={clsx("page-view page-view--landing-layout main", {
        expanded: isExpanded,
        locked: isLocked,
      })}
    >
      {render()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isExpanded: isExpandedSelector(state),
  isLocked: isLockedSelector(state),
});

export default connect(mapStateToProps, null)(Main);
