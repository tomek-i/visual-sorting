import React from "react";

import { App } from "../App";

export default {
  component: App,
  title: "App",
};

const Template = (args) => (
  <div>
    <App {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
