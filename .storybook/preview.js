import React from "react";
import { addDecorator } from "@storybook/react";
import { Global } from "./Global";

addDecorator((storyFn) => <Global>{storyFn()}</Global>);
