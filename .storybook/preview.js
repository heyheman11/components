import React from "react";

export const decorators = [
  (Story) => (
    <div style={{ boxSizing: "border-box" }}>
      <Story />
    </div>
  ),
];
