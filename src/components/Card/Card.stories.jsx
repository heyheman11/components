import React from "react";
import { Card } from "./Card";

export default { title: "Card" };

export const Default = () => (
  <Card heading={"v10.0.1"}>
    <p>Description of the package</p>
  </Card>
);

export const withAnimation = () => {
  return (
    <Card heading={"v10.0.1"} animated>
      <p>Description of the package</p>
    </Card>
  );
};

export const withHover = () => {
  return (
    <Card heading={"v10.0.1"} hover>
      <p>Description of the package</p>
    </Card>
  );
};

export const withHoverAndAnimated = () => {
  return (
    <Card heading={"v10.0.1"} hover animated>
      <p>Description of the package</p>
    </Card>
  );
}
