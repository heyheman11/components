import React from "react";
import { SideBar } from "./SideBar";
import Chevron from "../../assets/Chevron.svg";

export default {
  title: "SideBar",
  decorators: [
    (Story) => (
      <div style={{ height: "calc(100vh - 32px)" }}>
        <Story />
      </div>
    ),
  ],
};

const data = [
  {
    icon: <Chevron />,
    title: "Home page",
    link: "/chevron",
  },
  {
    icon: <Chevron />,
    title: "Second Page",
    link: "/chevron",
  },
  {
    icon: <Chevron />,
    title: "Third Page",
    link: "/chevron",
  },
];

export const NotExpanded = () => <SideBar items={data} />;

export const ExpandedByButton = () => <SideBar items={data} expandable />;
