// import React, { memo } from "react";
// import clsx from "clsx";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { useHover } from "hooks";

// const AppSidebar = memo(
//   ({ expandRequest, collapseRequest }) => {
//     const [hoverRef] = useHover({ expandRequest, collapseRequest });

//     const onLockIconClick = (event) => {
//       event.preventDefault();

//       if (isLocked) {
//         unlock();
//         collapseRequest();
//       } else {
//         lock();
//       }
//     };

//     return (
//       <aside>
//         <nav ref={hoverRef}>
//           <div onClick={onLockIconClick}>Expand</div>
//           Aside Sidebar
//         </nav>
//       </aside>
//     );
//   },
//   (prevProps, nextProps) => {
//     return (
//       prevProps.isExpanded === nextProps.isExpanded &&
//       prevProps.isLocked === nextProps.isLocked
//     );
//   }
// );

// const mapStateToProps = (state) => ({
//   isExpanded: isExpandedSelector(state),
//   isLocked: isLockedSelector(state)
// });

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   expandRequest,
//   unlock,
//   lock,
//   collapseRequest
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
