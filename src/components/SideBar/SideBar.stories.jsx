import React from "react";
import { SideBar } from "./SideBar";
import Chevron from "../../assets/Chevron.svg";

export default { title: "SideBar" };

const data = [
  {
    icon: <Chevron width={20} height={20} />,
    title: "Home page",
    link: "/chevron",
  },
  {
    icon: <Chevron width={20} height={20} />,
    title: "Second Page",
    link: "/chevron",
  },
  {
    icon: <Chevron width={20} height={20} />,
    title: "Third Page",
    link: "/chevron",
  },
  {
    icon: <Chevron width={20} height={20} />,
    title: "Fourth page",
    link: "/chevron",
  },
];

export const Default = () => <SideBar items={data} />;
