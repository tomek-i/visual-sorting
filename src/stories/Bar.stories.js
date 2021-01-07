import React from "react";

import { Bar } from "../components/atoms/Bar";

export default {
  component: Bar,
  title: "Bar",
};

const Template = (args) => <Bar {...args} />;

export const Default = Template.bind({});
export const WithValue = Template.bind({});

Default.args = {};
WithValue.args = {
  value: 33,
};
