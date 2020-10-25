//@flow
import React from "react";

type AppSidebarProps = {
  title: ?string,
};
const AppSidebar = ({ title, name }: AppSidebarProps) => {
  return <>{`Sidebar ${title} Rendered`}</>;
};

export { AppSidebar };
